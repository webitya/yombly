/**
 * Pure JS text normalization and similarity utilities (no external AI)
 * - normalize: lowercases and strips punctuation
 * - tokenize: splits into words with stopword removal
 * - jaccard: set similarity for token overlap
 * - trigramDice: character 3-gram Dice coefficient
 * - levenshtein: edit distance
 * - score: composite similarity 0..1
 * - expandQuery: enriches the query with synonyms and context
 * - rankCandidatesDual: scores candidates against both question and answer text
 * - sanitizeText: removes forbidden patterns from text
 * - filterOutForbidden: filters out items containing forbidden patterns
 */

const STOPWORDS = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "if",
  "then",
  "else",
  "for",
  "to",
  "of",
  "in",
  "on",
  "at",
  "by",
  "with",
  "about",
  "as",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "from",
  "it",
  "this",
  "that",
  "these",
  "those",
  "you",
  "your",
  "yours",
  "we",
  "our",
  "ours",
])

export function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function tokenize(text) {
  const norm = normalize(text)
  const tokens = norm.split(" ").filter(Boolean)
  return tokens.filter((t) => !STOPWORDS.has(t))
}

export function jaccard(aTokens, bTokens) {
  const a = new Set(aTokens)
  const b = new Set(bTokens)
  if (a.size === 0 && b.size === 0) return 1
  let inter = 0
  for (const t of a) if (b.has(t)) inter++
  const union = a.size + b.size - inter
  return union === 0 ? 0 : inter / union
}

function trigrams(s) {
  const str = `  ${normalize(s)}  `
  const grams = new Set()
  for (let i = 0; i < str.length - 2; i++) grams.add(str.slice(i, i + 3))
  return grams
}

export function trigramDice(a, b) {
  const A = trigrams(a)
  const B = trigrams(b)
  if (A.size === 0 && B.size === 0) return 1
  let inter = 0
  for (const g of A) if (B.has(g)) inter++
  return (2 * inter) / (A.size + B.size || 1)
}

export function levenshtein(a, b) {
  const s = normalize(a)
  const t = normalize(b)
  const m = s.length
  const n = t.length
  if (m === 0) return n
  if (n === 0) return m
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost)
    }
  }
  return dp[m][n]
}

export function score(query, candidate) {
  const qTok = tokenize(query)
  const cTok = tokenize(candidate)
  const j = jaccard(qTok, cTok)
  const d = trigramDice(query, candidate)
  const maxLen = Math.max(normalize(query).length, normalize(candidate).length, 1)
  const lev = levenshtein(query, candidate)
  const levSim = 1 - Math.min(lev / maxLen, 1)
  return 0.5 * j + 0.3 * d + 0.2 * levSim
}

export function expandQuery(query, lastQuestion) {
  const q = (query || "").trim()
  const last = (lastQuestion || "").trim()

  // basic pronoun/coref expansion
  const pronounLike = /\b(it|that|this|they|them|those|these|there|here|one)\b/i.test(q)
  let enriched = q
  if (pronounLike && last) {
    enriched = `${q} about ${last}`
  }

  // lightweight synonym expansion: append common variants to help the matcher
  const SYN = {
    price: ["cost", "pricing", "fees", "fee"],
    support: ["help", "contact", "assistance"],
    plan: ["tier", "subscription", "package"],
    feature: ["capability", "function", "option"],
    nextjs: ["next js", "next-js"],
    login: ["sign in", "signin", "log in"],
    signup: ["sign up", "register", "registration"],
    free: ["starter", "trial"],
  }

  const words = tokenize(enriched)
  const adds = []
  for (const w of words) {
    if (SYN[w]) {
      adds.push(...SYN[w])
    }
  }
  if (adds.length) {
    enriched = `${enriched} ${adds.join(" ")}`
  }
  return enriched
}

// ranks by combining similarity to both question and answer text
export function rankCandidatesDual(query, items, questionKey = "q", answerKey = "a") {
  const scored = items.map((item, idx) => {
    const qText = (item && item[questionKey]) || ""
    const aText = (item && item[answerKey]) || ""
    const sq = score(query, qText)
    const sa = score(query, aText)
    // weight: prioritize question match but include answer content relevance
    const s = 0.7 * sq + 0.3 * sa
    return { idx, item, s, sq, sa }
  })
  scored.sort((a, b) => b.s - a.s)
  return scored
}

export function rankCandidates(query, items, key = "q") {
  const scored = items.map((item, idx) => ({
    idx,
    item,
    s: score(query, (item && item[key]) || ""),
  }))
  scored.sort((a, b) => b.s - a.s)
  return scored
}

export const FORBIDDEN_PATTERNS = [/next\.js/gi, /\bnextjs\b/gi, /\bnext-js\b/gi]

export function sanitizeText(text) {
  let s = String(text ?? "")
  for (const re of FORBIDDEN_PATTERNS) {
    s = s.replace(re, "")
  }
  // collapse extra spaces created by removals
  return s.replace(/\s{2,}/g, " ").trim()
}

export function filterOutForbidden(items, key = "q") {
  const arr = Array.isArray(items) ? items : []
  return arr.filter((it) => {
    const q = String(it?.[key] ?? "")
    const a = String(it?.a ?? "")
    return !FORBIDDEN_PATTERNS.some((re) => re.test(q) || re.test(a))
  })
}
