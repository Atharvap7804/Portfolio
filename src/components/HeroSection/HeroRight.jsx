import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full lg:w-1/2 flex justify-center items-center relative"
    >
      {/* Visual background flare */}
      <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
        {/* Radial Glow */}
        <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <DotLottieReact
          className="w-full h-full object-contain"
          src="https://lottie.host/0548c258-42c6-45bf-97b0-04f69871937f/oGTSxbdqXt.lottie"
          loop
          autoplay
        />
      </div>
    </motion.div>
  );
};

export default HeroRight;