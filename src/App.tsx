

import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Review from './components/Review/Review'
import ParentNavbar from './components/parentNavbar/ParentNavbar'
function App() {

  return (
    <>
      <div className='app'>
        <ParentNavbar/>
        <Home/>
        <About/>
        <Review/>
        <Contact/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
