import About from "./About";
import Hero from "./Hero";


export default function page() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden" >
      <Hero/>
      <About/>
    </main>
  )
}
