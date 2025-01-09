"use client";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { motion } from "framer-motion";

export function Hero({ src }: { src: string }) {
  return (
    <HeroHighlight
      src={src}
      className="text-left from-yellow-400 to-amber-400"
      containerClassName="justify-start h-72 md:h-96 lg:h-[35rem]"
      bgClassName="h-full brightness-75"
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
      >
        Fast, reliable immigration services from experienced consultants you{" "}
        <Highlight className="text-white">you can trust.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
