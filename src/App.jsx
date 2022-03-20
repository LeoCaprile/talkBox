import './App.css'
import SpechContextProvider from './context/SpechContextProvider'
import Home from './pages/Home'

function App() {

  return (
    <SpechContextProvider>
      <Home></Home>
    </SpechContextProvider>

  )
}

export default App
