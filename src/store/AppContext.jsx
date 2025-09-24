
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { getLS, setLS } from './useLocalStorage'
import tr from '../data/tr.json'
import en from '../data/en.json'

const Ctx = createContext(null)

const initial = {
  lang: getLS('lang', 'tr'),     
  theme: getLS('theme', 'light') 
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.lang } 
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)

 
  useEffect(() => { setLS('lang', state.lang) }, [state.lang])

 
  useEffect(() => {
    setLS('theme', state.theme)
    const root = document.documentElement
    state.theme === 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
  }, [state.theme])

  
  const content = state.lang === 'tr' ? tr : en

  const value = useMemo(() => ({ state, dispatch, content }), [state, content])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useApp = () => useContext(Ctx)
