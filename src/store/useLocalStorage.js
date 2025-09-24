
export const getLS = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)      
    return raw ? JSON.parse(raw) : fallback      
  } catch {
    return fallback                             
  }
}

export const setLS = (key, value) => {
  try {
    const raw = JSON.stringify(value)           
    localStorage.setItem(key, raw)
  } catch {
    
  }
}
