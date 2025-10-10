"use client"

import { useEffect, useRef, useState } from "react"
import ChatIcon from "@mui/icons-material/Chat"
import CloseIcon from "@mui/icons-material/Close"
import SendIcon from "@mui/icons-material/Send"
import { rankCandidatesDual, expandQuery, sanitizeText, filterOutForbidden } from "./qa-utils"

export default function YomblyChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask anything about Yombly. I’ll answer from predefined knowledge." },
  ])
  const [qas, setQas] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const listRef = useRef(null)

  useEffect(() => {
    try {
      let loaded = null

      if (typeof window !== "undefined" && Array.isArray(window.__YOMBLY_QAS)) {
        loaded = window.__YOMBLY_QAS
      }

      if (!loaded) {
        const el = typeof document !== "undefined" ? document.getElementById("yombly-qas") : null
        if (el && el.textContent) {
          try {
            const parsed = JSON.parse(el.textContent)
            if (Array.isArray(parsed)) loaded = parsed
          } catch {}
        }
      }

      if (!loaded) {
        const raw = localStorage.getItem("yombly_qas")
        if (raw) {
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed)) loaded = parsed
        }
      }

      if (!loaded)
        loaded = [
          { q: "What is Yombly?", a: "Yombly is a modern platform for streamlined learning and sales enablement." },
          { q: "How can I contact support?", a: "Use the contact form in the app or email support@yombly.example." },
          { q: "Is there a free plan?", a: "We offer a starter plan for trying out core features. Upgrade anytime." },
        ]

      const cleaned = (loaded || [])
        .filter(Boolean)
        .map((x) => ({ q: String(x.q || "").trim(), a: String(x.a || "").trim() }))
        .filter((x) => x.q && x.a)

      const cleanedFiltered = filterOutForbidden(cleaned)
      setQas(cleanedFiltered)
      try {
        localStorage.setItem("yombly_qas", JSON.stringify(cleanedFiltered))
      } catch {}
    } catch {
      setQas([
        { q: "What is Yombly?", a: "Yombly is a modern platform for streamlined learning and sales enablement." },
        { q: "How can I contact support?", a: "Use the contact form in the app or email support@yombly.example." },
        { q: "Is there a free plan?", a: "We offer a starter plan for trying out core features. Upgrade anytime." },
      ])
    }
  }, [])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  function handleCommand(cmd) {
    const name = cmd.slice(1).trim().toLowerCase()
    if (name === "reset" || name === "clear") {
      setMessages([{ role: "assistant", content: "Chat reset. Ask anything about Yombly." }])
      return true
    }
    return false
  }

  async function handleSend(e) {
    e?.preventDefault()
    const qRaw = input.trim()
    if (!qRaw || loading) return
    setError("")
    setMessages((prev) => [...prev, { role: "user", content: qRaw }])
    setInput("")
    setLoading(true)

    try {
      if (qRaw.startsWith("/") && handleCommand(qRaw)) {
        setLoading(false)
        return
      }

      const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content || ""
      const q = expandQuery(qRaw, lastUser)

      const ranked = rankCandidatesDual(q, qas, "q", "a")
      const threshold = 0.33
      const top = ranked.slice(0, 3).filter((r) => r.s >= 0.15)

      let answer
      if (top.length && top[0].s >= threshold) {
        const primary = top[0].item
        const relatedList = top
          .slice(1)
          .map((r) => sanitizeText(r.item.q))
          .filter(Boolean)
        answer = primary.a
        if (relatedList.length) {
          answer += `\n\nRelated questions:\n${relatedList.map((q) => `- ${q}`).join("\n")}`
        }
      } else if (top.length) {
        const bestQ = sanitizeText(top[0].item.q)
        answer = `Closest I can find:\n"${bestQ}"\n\nAnswer: ${top[0].item.a}`
      } else {
        answer = "I don't have an answer for that yet. Try rephrasing or enriching your predefined Q&A."
      }

      answer = sanitizeText(answer) || "I don't have an answer for that yet."

      setMessages((prev) => [...prev, { role: "assistant", content: answer }])
    } catch (err) {
      setError("Something went wrong. Please try again.")
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I ran into an error processing that. Please try again." },
      ])
    } finally {
      setLoading(false)
    }
  }

  const quick = filterOutForbidden(qas).slice(0, 3)

  return (
    <>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(!open)}
        className="fixed z-50 bottom-4 right-4 rounded-full bg-primary text-primary-foreground shadow-lg transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        style={{ width: 56, height: 56 }}
      >
        {open ? <CloseIcon fontSize="medium" /> : <ChatIcon fontSize="medium" />}
      </button>

      {open && (
        <section
          className="fixed z-50 bottom-20 right-4 w-[min(92vw,380px)] max-h-[70vh] flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-xl"
          role="dialog"
          aria-label="Yombly Chat"
        >
          <header className="flex items-center justify-between px-3 py-2 border-b border-border">
            <div className="flex items-center gap-2">
              <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
              <h2 className="text-sm font-medium text-pretty">Yombly Assistant</h2>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                aria-label="Close chat"
                className="p-1.5 rounded-md hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setOpen(false)}
                title="Close"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </header>

          <div ref={listRef} className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm"
                      : "max-w-[85%] rounded-lg bg-muted text-foreground px-3 py-2 text-sm"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-muted-foreground">Thinking…</div>}
            {error && <div className="text-xs text-destructive">{error}</div>}
          </div>

          {quick.length > 0 && (
            <div className="px-3 pb-1 pt-0 flex flex-wrap gap-1">
              {quick.map((it, i) => {
                const label = sanitizeText(it.q)
                if (!label) return null
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setInput(label)}
                    className="text-xs rounded-full border border-border px-2 py-1 hover:bg-muted"
                    title={label}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          )}

          <form onSubmit={handleSend} className="p-3 border-t border-border flex items-center gap-2">
            <input
              aria-label="Type your message"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
              placeholder="Ask anything…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              aria-label="Send message"
              type="submit"
              disabled={loading || !input.trim()}
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm disabled:opacity-50 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              title="Send"
            >
              <SendIcon fontSize="small" />
            </button>
          </form>
        </section>
      )}
    </>
  )
}
