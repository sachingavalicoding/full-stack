import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from "./components/Home/Blogs"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/contact/Contact"
import NotFound from "./components/notfound/NotFound"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App