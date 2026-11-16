import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'navy', setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('bp-theme') || 'navy' } catch { return 'navy' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('bp-theme', theme) } catch { /* storage blocked */ }
  }, [theme])
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
