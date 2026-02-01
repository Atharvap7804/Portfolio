import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";
const HeroRight = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
      w-full 
      flex justify-center 
      lg:w-2/3
    ">
      <DotLottieReact
        className="w-100 sm:w-100 lg:w-full"
        src="https://lottie.host/0548c258-42c6-45bf-97b0-04f69871937f/oGTSxbdqXt.lottie"
        loop
        autoplay
      />
    </motion.div>
  )
}


export default HeroRight
