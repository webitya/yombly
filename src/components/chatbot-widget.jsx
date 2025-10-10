/* 
  "use client"
  Compact bottom-right chatbot widget using MUI icons, no TypeScript.
  - Preload knowledge from /public/data
  - User can paste/edit knowledge
  - Sends messages to /api/chat with RAG prompt built server-side
*/
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import ChatIcon from "@mui/icons-material/ChatRounded"
import CloseIcon from "@mui/icons-material/CloseRounded"
import SendIcon from "@mui/icons-material/SendRounded"
import SettingsIcon from "@mui/icons-material/SettingsRounded"
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded"
import RestartAltIcon from "@mui/icons-material/RestartAltRounded"
import { cn } from "@/lib/utils" // provided by project defaults

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(key) : null
      return raw ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])
  return [value, setValue]
}

const SUGGESTIONS = [
  "What is Yombly?",
  "What is MarketCrew?",
  "Explain Sales Syllabus benefits",
  "What is ExactIQ?",
  "How does Revenue Pilot work?",
]

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: "sys-welcome",
      role: "assistant",
      content:
        "Hi! I’m your Yombly assistant. Ask me anything about Yombly’s products and services or paste your own knowledge in Settings.",
    },
  ])
  const [knowledgeText, setKnowledgeText] = useLocalStorage("yombly.chat.knowledge", "")
  const [useDefaultKnowledge, setUseDefaultKnowledge] = useLocalStorage("yombly.chat.useDefault", true)
  const [topK, setTopK] = useLocalStorage("yombly.chat.topK", 6)

  const listRef = useRef(null)

  useEffect(() => {
    if (!open) return
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  async function preloadDefault() {
    try {
      const [homeRes, servRes] = await Promise.all([fetch("/data/yombly-homepage.txt"), fetch("/data/services.txt")])
      const [home, services] = await Promise.all([homeRes.text(), servRes.text()])
      setKnowledgeText(["# Yombly Homepage", home.trim(), "", "# Services", services.trim()].join("\n\n"))
      setUseDefaultKnowledge(true)
    } catch (e) {
      console.error("[v0] Preload default knowledge failed:", e)
    }
  }

  function resetChat() {
    setMessages([
      {
        id: "sys-welcome",
        role: "assistant",
        content:
          "Hi! I’m your Yombly assistant. Ask me anything about Yombly’s products and services or paste your own knowledge in Settings.",
      },
    ])
    setInput("")
  }

  async function sendMessage(text) {
    if (!text?.trim()) return
    const userMsg = { id: `u-${Date.now()}`, role: "user", content: text.trim() }
    const nextMessages = [...messages, userMsg]
    setMessages(nextMessages)
    setInput("")
    setIsSending(true)

    const payload = {
      messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
      knowledge: buildKnowledgeDocs(knowledgeText),
      options: { topK },
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ""
      const id = `a-${Date.now()}`
      setMessages((prev) => [...prev, { id, role: "assistant", content: "" }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, content: acc } : m)))
      }
    } catch (e) {
      console.error("[v0] Chat error:", e)
      setMessages((prev) => [
        ...prev,
        { id: `err-${Date.now()}`, role: "assistant", content: "Sorry, I ran into an issue. Please try again." },
      ])
    } finally {
      setIsSending(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-4 right-4 z-50 shadow-lg rounded-full",
          "bg-primary text-primary-foreground",
          "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "h-12 w-12 grid place-items-center",
        )}
      >
        {open ? <CloseIcon fontSize="small" /> : <ChatIcon fontSize="small" />}
      </button>

      {/* Panel */}
      <div
        aria-live="polite"
        className={cn(
          "fixed z-50 bottom-20 right-4 w-[92vw] max-w-[380px] rounded-xl border bg-card text-card-foreground shadow-xl",
          "transition-all duration-200",
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b bg-secondary text-secondary-foreground rounded-t-xl">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 grid place-items-center rounded-full bg-primary text-primary-foreground">
              <ChatIcon sx={{ fontSize: 16 }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-pretty">Yombly Assistant</span>
              <span className="text-xs text-muted-foreground">Ask about Yombly or your own data</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSettingsOpen((s) => !s)}
              aria-label="Settings"
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              <SettingsIcon sx={{ fontSize: 18 }} />
            </button>
            <button
              onClick={resetChat}
              aria-label="Reset conversation"
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              <RestartAltIcon sx={{ fontSize: 18 }} />
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        </div>

        {/* Settings panel */}
        {settingsOpen && (
          <div className="px-3 py-2 border-b bg-muted/50">
            <details className="group">
              <summary className="list-none flex items-center gap-2 cursor-pointer select-none">
                <ExpandMoreIcon className="transition-transform group-open:rotate-180" sx={{ fontSize: 18 }} />
                <span className="text-sm font-medium">Knowledge Settings</span>
              </summary>

              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs text-muted-foreground">Use default Yombly content</label>
                  <input
                    type="checkbox"
                    className="accent-primary h-4 w-4"
                    checked={!!useDefaultKnowledge}
                    onChange={(e) => setUseDefaultKnowledge(e.target.checked)}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={preloadDefault}
                    className="text-xs px-2 py-1 rounded-md bg-primary text-primary-foreground hover:opacity-90"
                  >
                    Preload Yombly data
                  </button>
                  <button
                    onClick={() => setKnowledgeText("")}
                    className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground hover:opacity-90"
                  >
                    Clear
                  </button>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground block mb-1">
                    Paste or edit your knowledge (Markdown or plain text)
                  </label>
                  <textarea
                    value={knowledgeText}
                    onChange={(e) => setKnowledgeText(e.target.value)}
                    className="w-full h-28 resize-y rounded-md border bg-background p-2 text-sm"
                    placeholder="Paste FAQs, product descriptions, policies, etc."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-xs text-muted-foreground">Retriever topK</label>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={topK}
                    onChange={(e) => setTopK(Number(e.target.value || 6))}
                    className="w-16 rounded-md border bg-background p-1 text-sm"
                  />
                </div>
              </div>
            </details>
          </div>
        )}

        {/* Suggestions */}
        <div className="px-3 py-2 border-b bg-card/60">
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-xs px-2 py-1 rounded-full border hover:bg-accent hover:text-accent-foreground"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div ref={listRef} className="max-h-[50vh] md:max-h-[420px] overflow-y-auto px-3 py-2 space-y-3">
          {messages.map((m) => (
            <MessageBubble key={m.id} role={m.role} content={m.content} />
          ))}
        </div>

        {/* Composer */}
        <div className="p-2 border-t bg-card rounded-b-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-end gap-2"
          >
            <textarea
              aria-label="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your question..."
              className="flex-1 min-h-[40px] max-h-32 resize-y rounded-md border bg-background p-2 text-sm"
            />
            <button
              type="submit"
              disabled={isSending || !input.trim()}
              className={cn(
                "h-10 w-10 rounded-md grid place-items-center",
                "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50",
              )}
              aria-label="Send"
            >
              <SendIcon sx={{ fontSize: 18 }} />
            </button>
          </form>
          <p className="mt-1 text-[11px] text-muted-foreground">
            Answers use your knowledge first. If info is missing, I’ll say so clearly.
          </p>
        </div>
      </div>
    </>
  )
}

function MessageBubble({ role, content }) {
  const isUser = role === "user"
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
          isUser ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
        )}
      >
        <RichText text={content} />
      </div>
    </div>
  )
}

// very small markdown-ish renderer for lists/linebreaks (no external dependencies)
function RichText({ text }) {
  const lines = useMemo(() => (text || "").split("\n"), [text])
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const li = line.trim().match(/^[-*•]\s+(.*)$/)
        if (li) {
          return (
            <div key={i} className="flex gap-2">
              <span>•</span>
              <span>{li[1]}</span>
            </div>
          )
        }
        return <p key={i}>{line}</p>
      })}
    </div>
  )
}

function buildKnowledgeDocs(text) {
  const docs = []
  if (!text?.trim()) return docs

  // split by major headings first, then by paragraphs
  const blocks = text
    .split(/\n#{1,6}\s+/) // split on markdown headings if present
    .flatMap((b) => b.split(/\n{2,}/)) // then split on blank lines
    .map((s) => s.trim())
    .filter(Boolean)

  let id = 0
  for (const block of blocks) {
    // further chunk large blocks
    const chunks = chunkByLength(block, 800)
    for (const chunk of chunks) {
      docs.push({ id: `kb-${id++}`, text: chunk })
    }
  }
  return docs
}

function chunkByLength(str, size) {
  if (str.length <= size) return [str]
  const out = []
  let i = 0
  while (i < str.length) {
    out.push(str.slice(i, i + size))
    i += size
  }
  return out
}
