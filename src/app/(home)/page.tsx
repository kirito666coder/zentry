import NavBar from "../components/NavBar";
import About from "./About";
import Hero from "./Hero";


export default function page() {
  return (
    <main className="relative min-h-screen max-w-screen overflow-x-hidden" >
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  )
}
