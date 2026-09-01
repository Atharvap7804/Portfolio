import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Experience from './pages/Experience';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 selection:bg-purple-500/30 selection:text-purple-300 overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 flex justify-center">
        <div className="absolute top-[-10%] w-[600px] h-[500px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[140px]" />
      </div>

      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
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
    </div>
  );
};

export default App;