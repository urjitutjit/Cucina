import { createContext, useContext, useState } from 'react'

const CursorContext = createContext(null)

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default')

  const onMouseEnter = (type = 'hovering') => setCursorState(type)
  const onMouseLeave = () => setCursorState('default')

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState, onMouseEnter, onMouseLeave }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const ctx = useContext(CursorContext)
  if (!ctx) throw new Error('useCursor must be used within CursorProvider')
  return ctx
}
