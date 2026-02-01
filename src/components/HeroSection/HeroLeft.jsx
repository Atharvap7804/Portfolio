import { motion } from "framer-motion";
const HeroLeft = () => {
  return (
    <motion.div
 initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}   
    className="
      flex flex-col gap-6 
      text-white 
      w-full 
      text-center
      shadow-lg
       drop-shadow-gray-950
      p-10
      lg:w-1/2 
      lg:text-left
    ">
    
      <h1 className="
        hero-h1
        text-4xl font-bold
        sm:text-3xl
        lg:text-5xl
      ">
        Hii all 👋 I'm Atharva
      </h1>
      <h2 className="
        text-xl font-bold
        sm:text-5xl
        lg:text-4xl
      ">Full Stack MERN Developer | Building Scalable & Real-World Web Applications 🚀</h2>
      <p className="
        abt-text
        text-lg 
        sm:text-xl 
        lg:text-xl
        
      ">
        <span className="font-normal">I’m a Full Stack MERN Developer who loves building fast, scalable, and user-friendly web applications. I specialize in creating clean frontends, secure backends, and real-world products that solve actual problems.</span>
       
      </p>

      <div className="
        flex justify-center gap-6 text-4xl
        lg:justify-start
      ">
        <a href="https://github.com/Atharvap7804" target="_blank">
          <span className="devicon-github-original text-white"></span>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <span className="devicon-linkedin-plain colored"></span>
        </a>
      </div>

      <div className="
        flex justify-center gap-5
        lg:justify-start
      ">
        <a className="bg-violet-600 px-4 py-2 rounded-md" href="#contact">
          Contact me
        </a>
        <a href="/resume.html" className="bg-violet-600 px-4 py-2 rounded-md">
          Resume
        </a>
      </div>
    </motion.div>
  )
}


export default HeroLeft
