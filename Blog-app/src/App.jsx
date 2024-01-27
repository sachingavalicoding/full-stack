import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from "./components/Home/Blogs"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/contact/Contact"
import NavbarSm from "./components/ui/NavbarSm"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NavbarSm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App