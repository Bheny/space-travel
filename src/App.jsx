

import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewPage from './pages/CrewPage'




function App() {
  // const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />

           <Route path="/destinations" element={<DestinationPage />} />

           <Route path="/crew" element={<CrewPage />} />

        </Routes>
      </BrowserRouter>
    
  )
}

export default App
