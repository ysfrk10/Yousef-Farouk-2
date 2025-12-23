import Navbar from "./components/Layout/Navbar";
import Particles from "./components/ui/backGround";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-black text-gray-900 dark:text-white font-sans antialiased relative">
      {/* Global Particles Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={["#3b82f6", "#60a5fa", "#93c5fd"]}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
