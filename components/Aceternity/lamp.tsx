"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <div>
      
    </div>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full rounded-md opacity-90",
        "py-4 md:py-12 lg:py-16",         // padding tiers
        className
      )}
    >
      {/* ────────── LIGHT-BEAM LAYER ────────── */}
      <div className="relative isolate flex w-full flex-1 scale-y-110 items-center justify-center">
        {/* LEFT cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "6rem" }}          // phone
          whileInView={{ opacity: 1, width: "12rem" }}       // phone
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="
            absolute right-1/2
            h-24  w-[12rem]                                     /* phone  */
            md:h-48 md:w-[24rem]                                /* laptop */
            lg:h-64 lg:w-[32rem]                                /* desktop+ */
            bg-gradient-conic from-primary via-transparent to-transparent
            opacity-20
            [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute inset-x-0 bottom-0
                          h-16 md:h-32 lg:h-40
                          bg-white [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0
                          h-full w-20 md:w-32 lg:w-40
                          bg-white [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* RIGHT cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "6rem" }}
          whileInView={{ opacity: 1, width: "12rem" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="
            absolute left-1/2
            h-24  w-[12rem]
            md:h-48 md:w-[24rem]
            lg:h-64 lg:w-[32rem]
            bg-gradient-conic from-transparent via-transparent to-primary
            opacity-20
            [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute bottom-0 right-0
                          h-full w-20 md:w-32 lg:w-40
                          bg-white [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute inset-x-0 bottom-0
                          h-16 md:h-32 lg:h-40
                          bg-white [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* central glow strip */}
        <div className="
          absolute top-1/2 w-full scale-x-125 bg-white blur-2xl
          h-16  translate-y-4               /* phone */
          md:h-40 md:translate-y-10         /* laptop */
          lg:h-56 lg:translate-y-14" />
        <div className="
          absolute top-1/2 w-full opacity-10 backdrop-blur-md
          h-16 md:h-40 lg:h-56" />

        {/* blur circle */}
        <motion.div
          initial={{ width: "3.5rem" }}
          whileInView={{ width: "500px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="
            hidden md:block absolute z-30 rounded-full bg-primary blur-2xl
            -translate-y-[2.5rem] h-10  w-24          /* phone */
            md:-translate-y-[4.5rem] md:h-20 md:w-48  /* laptop */
            lg:-translate-y-[6rem]   lg:h-28 lg:w-64" /* desktop+ */
        />
        <motion.div
          initial={{ width: "3.5rem" }}
          whileInView={{ width: "200px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="
            absolute z-30 rounded-full bg-primary blur-2xl
            -translate-y-[2.5rem] h-10  w-24          /* phone */
            md:-translate-y-[4.5rem] md:h-20 md:w-48  /* laptop */
            lg:-translate-y-[6rem]   lg:h-28 lg:w-64" /* desktop+ */
        />

        {/* TOP light bar */}
        <motion.div
          initial={{ width: "5rem", opacity: 0.7 }}
          whileInView={{ width: "40vw", opacity: 1 }}     /* phone */
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="
            hidden md:block absolute z-40 rounded-full bg-primary
            h-[4.5px] -translate-x-1/2 -translate-y-[80%] left-1/2 
            md:top-[-502px] md:w-[35vw]                   
            lg:top-[-54px] lg:w-[25vw]" />

        <motion.div
          initial={{ width: "5rem", opacity: 0.7 }}
          whileInView={{ width: "55vw", opacity: 1 }}     /* phone */
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="
            md:hidden absolute z-40 rounded-full bg-primary
            h-[4.5px] -translate-x-1/2 -translate-y-[80%] left-1/2 
            bottom-[7px]           
                          
          " />

        {/* faint white plate */}
        <div className="
          absolute w-full bg-white
          -translate-y-24  h-20     /* phone */
          md:-translate-y-36 md:h-32 /* laptop */
          lg:-translate-y-48 lg:h-40" />
      </div>

      {/* ────────── CONTENT SLOT ────────── */}
      <div className="relative z-50 flex flex-col items-center px-3 md:px-5 lg:px-6">
        {children}
      </div>
    </div>
  );
};
