
import { useApp } from '../store/AppContext'
import Toggle from './UI/Toggle'

export default function Header(){
  const { state, dispatch, content } = useApp()
  const nav = content.nav ?? []

  const skillsLabel   = nav.find(n => n.id === 'skills')?.label ?? (state.lang==='tr' ? 'Yetenekler' : 'Skills')
  const projectsLabel = nav.find(n => n.id === 'projects')?.label ?? (state.lang==='tr' ? 'Projeler'   : 'Projects')
  const hireLabel     = state.lang === 'tr' ? 'Beni işe al' : 'Hire me'
  const langToggleTxt = state.lang === 'tr' ? 'Switch to English' : "TÜRKÇE'YE GEÇ"

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
 
        <a href="#hero" className="font-bold tracking-wide">OK</a>

      
        <div className="flex flex-col items-end gap-2">
 
          <div className="flex items-center gap-3">
            <Toggle
              checked={state.theme === 'dark'}
              onChange={() => dispatch({ type:'TOGGLE_THEME' })}
              label="DARK MODE"
            />
            <span className="opacity-40 select-none">|</span>
            <button
              onClick={() => dispatch({ type:'SET_LANG', lang: state.lang === 'tr' ? 'en' : 'tr' })}
              className="text-[11px] uppercase tracking-wider opacity-80 hover:opacity-100"
            >
              {langToggleTxt}
            </button>
          </div>

         
          <div className="flex items-center gap-6 text-sm">
            <a href="#skills"   className="opacity-80 hover:opacity-100">{skillsLabel}</a>
            <a href="#projects" className="opacity-80 hover:opacity-100">{projectsLabel}</a>

            <a
              href="#contact"
              className="inline-flex items-center h-9 px-4 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {hireLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
