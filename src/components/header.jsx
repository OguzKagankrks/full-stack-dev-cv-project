
import { useApp } from '../store/AppContext'

function ModeSwitch() {
  const { state, toggleTheme, toggleLang } = useApp() 

  return (
    <div className="flex items-center gap-[14px] h-[38px]">
      <div className="flex items-center gap-4 h-[24px]">
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            checked={state.theme === 'dark'}
            onChange={toggleTheme}         
            className="sr-only peer"
          />
          <span className="block w-[55px] h-[24px] rounded-[100px] bg-[#4731D3] peer-focus:ring-2 peer-focus:ring-indigo-300" />
          <span className="absolute top-[4px] left-[4px] w-[16px] h-[16px] rounded-full bg-[#FFE86E] transition-all peer-checked:left-[35px]" />
          <span className="absolute top-[11px] left-[15px] w-[2px] h-[2px] rounded-full bg-[#E92577] transition-all peer-checked:left-[50px]" />
        </label>
        <span className="text-[15px] leading-[18px] font-bold tracking-[0.1em] text-[#777777]">DARK MODE</span>
      </div>

      <span className="text-[15px] leading-[18px] font-bold tracking-[0.1em] text-[#777777]">|</span>

      <button
        onClick={toggleLang}                 
        className="px-[10px] py-[10px] -mx-[10px] text-[15px] leading-[18px] font-bold tracking-[0.1em] text-[#4731D3] hover:underline"
      >
        {state.lang === 'tr' ? 'SWITCH TO ENGLISH' : 'TÜRKÇE’YE GEÇ'}
      </button>
    </div>
  )
}



function Logo() {

  const initial = 'O' 
  return (
    <div className="relative w-[63.68px] h-[62px] shrink-0">
      <div className="absolute inset-0 rounded-full bg-[#EEEBFF]" />
      <span
        className="absolute left-[16px] top-[13px] text-[24px] leading-[32px] font-semibold text-[#7B61FF] select-none"
        style={{ transform: 'matrix(0.87, 0.49, -0.51, 0.86, 0, 0)' }}
      >
        {initial}
      </span>
    </div>
  )
}

export default function Header() {
  const { content } = useApp()

 
  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ]

  const goTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="container mx-auto px-4 pt-4">
      <div className="mx-auto max-w-[1141.46px]">
     
        <div className="flex items-center justify-end">
          <ModeSwitch />
        </div>

      
        <div className="mt-2 h-[62px] flex items-center justify-between">
  
          <Logo />

   
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => goTo(n.id)}
                  className="text-[18px] leading-7 font-medium text-[#6B7280] hover:text-[#4338CA]"
                >
                  {n.label}
                </button>
              ))}
            </nav>

      
            <a
              href=""
              className="inline-flex h-[52px] items-center justify-center rounded-[6px] border border-[#3730A3] bg-white px-8 text-[18px] leading-7 font-medium text-[#3730A3] dark:bg-transparent"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
