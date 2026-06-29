import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CursorProvider } from '@context/CursorContext'
import { LoaderProvider } from '@context/LoaderContext'
import MainLayout from '@layouts/MainLayout'
import Home from '@pages/Home'

const App = () => {
  return (
    <LoaderProvider>
      <CursorProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
          </Routes>
        </Router>
      </CursorProvider>
    </LoaderProvider>
  )
}

export default App
