import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import LayoutPage from './pages/LayoutPage';
import Portfolio from './layouts/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<LayoutPage />} >
            <Route path='portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;
