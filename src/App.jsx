import { useState } from 'react'
import './App.css'

import LayoutPage from './pages/LayoutPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LayoutPage />
    </>
  )
}

export default App;
