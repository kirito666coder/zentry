import NavBar from "../components/NavBar";
import About from "./About";
import Features from "./Features";
import Hero from "./Hero";
import Story from "./Story";


export default function page() {
  return (
    <main className="relative min-h-screen max-w-screen overflow-x-hidden" >
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
    </main>
  )
}
