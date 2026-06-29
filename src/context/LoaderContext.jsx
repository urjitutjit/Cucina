import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext(null)

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const finishLoading = () => setIsLoading(false)

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading, progress, setProgress, finishLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  const ctx = useContext(LoaderContext)
  if (!ctx) throw new Error('useLoader must be used within LoaderProvider')
  return ctx
}
