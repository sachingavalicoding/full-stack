import Blogs from "./components/Home/Blogs"
import HeroPage from "./components/Home/HeroPage"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950">
      <Navbar />
      <HeroPage />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App