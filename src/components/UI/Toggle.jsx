
export default function Toggle({ checked, onChange, label = 'DARK MODE' }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className="group inline-flex items-center gap-2 select-none"
    >
      <span className="text-[11px] uppercase tracking-wider opacity-70">{label}</span>

  
      <span
        className={[
          "relative w-12 h-6 rounded-full transition-colors duration-200",
          checked ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-700",
        ].join(" ")}
      >
    
        <span
          className={[
            "absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow",
            "transition-transform duration-200",
            checked ? "translate-x-6" : "translate-x-0",
          ].join(" ")}
        />
      </span>
    </button>
  )
}
