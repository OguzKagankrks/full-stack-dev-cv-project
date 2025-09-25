
import { createContext, useContext, useEffect, useReducer } from 'react'
import tr from '../data/tr.json'
import en from '../data/en.json'
import projectsEN from '../data/projects.en.json'
import projectsTR from '../data/projects.tr.json'

const Ctx = createContext()

const initialState = {
  theme: (localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'),
  lang:  (localStorage.getItem('lang')  === 'tr'   ? 'tr'   : 'en'),
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const next = state.theme === 'dark' ? 'light' : 'dark' 
      return { ...state, theme: next }
    }
    case 'SET_THEME':
      return { ...state, theme: action.theme }
    case 'SET_LANG':
      return { ...state, lang: action.lang }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)


  const content  = state.lang === 'tr' ? tr  : en
  const projects = state.lang === 'tr' ? projectsTR : projectsEN


  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', state.theme === 'dark')
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

 
  useEffect(() => {
    localStorage.setItem('lang', state.lang)
  }, [state.lang])


  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' })
  const toggleLang  = () =>
    dispatch({ type: 'SET_LANG', lang: state.lang === 'tr' ? 'en' : 'tr' })

  return (
    <Ctx.Provider value={{ state, dispatch, content, projects, toggleTheme, toggleLang }}>
      {children}
    </Ctx.Provider>
  )
}

export const useApp = () => useContext(Ctx)
