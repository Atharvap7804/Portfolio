import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/HeroSection/Hero'
import Navbar from './components/Navbar/Navbar'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Experience from './pages/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="h-screen mt-10">
        <Hero/>
      </section>

      <section id="about" className="min-h-screen">
        <About/>
      </section>

      <section id="skills">
         <Skills/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="projects" className="min-h-screen">
       <Projects/>
      </section>
      <section id="contact" className="min-h-screen">
          <Contact/>
      </section>
      <Footer />
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
