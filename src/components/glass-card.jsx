/* reusable glass card wrapper */
export default function GlassCard({ className = "", children }) {
  return (
    <div className={`border border-slate-200 bg-white/70 backdrop-blur shadow-sm rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}
