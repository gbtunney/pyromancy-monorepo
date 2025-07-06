import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FontsPage from './pages/FontsPage'
import ButtonsPage from './pages/ButtonsPage'
import IconsPage from './pages/IconsPage'
import ColorsPage from './pages/ColorsPage'
import GradientsPage from './pages/GradientsPage'
import TypographyPage from './pages/TypographyPage'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fonts" element={<FontsPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/colors" element={<ColorsPage />} />
          <Route path="/gradients" element={<GradientsPage />} />
          <Route path="/typography" element={<TypographyPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
