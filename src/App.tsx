import "./App.css"
import {
  Footer,
  Blog,
  Features,
  WhatGPT3,
  Banner,
  Possibility,
} from "./containers"
import { CTAction, Brand, Navbar } from "./components"

function App() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Banner />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTAction />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
