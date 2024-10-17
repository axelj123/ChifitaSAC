
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {

  return (
    <div className='App overflow-container'>
      <Navbar/>
      <Hero/>
      <Services />

    </div>
  )
}

export default App
