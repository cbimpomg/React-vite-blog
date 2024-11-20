import { BrowserRouter,  Route,  Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contacts"
import About from "./pages/About"




const App = () => {
  return (
    <>
    <BrowserRouter>

    <Routes>




   
    <Route path="/" element={<Home />} />
    <Route path="/contact-us" element={<Contact/>} />
    <Route path="/about-us" element={<About/>} />

    
    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    </>


  )
}

export default App