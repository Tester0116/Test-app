import { useState } from "react"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs"

function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrumbs />
      <Home />
      <Footer />
    </div>
  )
}

export default App
