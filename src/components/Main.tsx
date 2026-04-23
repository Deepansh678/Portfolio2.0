import { motion } from "framer-motion";
import Computer from "./Computer";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import heroBg from "../assets/herobg.jpg";

const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full mt-12 h-[calc(100vh-48px)] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 🔥 Overlay (important for readability) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        variants={slideIn("left", "tween", 0, 1)}
        className="relative z-10 flex px-10 md:py-10 py-4 gap-4"
      >
        {/* Left line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]" />
          <div className="w-[2px] sm:h-64 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full opacity-60" />
        </div>

        {/* Text */}
        <div className="max-w-3xl">
          <h1 className="font-extrabold text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] leading-tight mt-2">
            
            <span className="text-gray-200">
              Hi, I am
            </span>

            <span className="relative ml-3 inline-block">
              
              {/* Glow layer */}
              <span className="absolute inset-0 text-cyan-400 blur-lg opacity-50">
                Deepansh
              </span>

              {/* Main text */}
              <span className="relative text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
                Deepansh
              </span>

            </span>

          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-blue-200 tracking-wide">
            <span className="text-cyan-400 font-semibold">
              Frontend Developer
            </span>{" "}
            <span className="text-gray-500">|</span>{" "}
            
            <span className="text-blue-300 font-medium">
              Web Developer
            </span>{" "}
            <span className="text-gray-500">|</span>{" "}
            
            <span className="text-indigo-300 font-medium">
              Shopify Developer
            </span>
          </p>

          {/* Tagline */}
          <p className="mt-3 text-gray-400 max-w-xl">
            Building modern, responsive, and user-focused web applications with clean UI and smooth user experience.
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute w-full bottom-2 flex justify-center items-center z-10">
        <a href="#about">
          <div className="h-12 w-6 rounded-full border-white border-2 py-1 flex justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-[updown_500ms_ease-in-out_0s_infinite_alternate]" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Main);