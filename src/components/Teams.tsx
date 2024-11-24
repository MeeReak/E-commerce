"use client";

import React, { useRef } from "react";
import { teamInfo as data } from "../utils/mockup";
import { TeamCard } from "./TeamCard";
import { motion, useInView } from "framer-motion";

export const Teams = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <header className="text-center pt-14 pb-9">
        <motion.p
          className="text-[#00B207] text-[14px] font-medium leading-[14px] tracking-[0.28px] uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Team
        </motion.p>
        <motion.p
          className="text-[#1A1A1A] text-[36px]  pt-2 font-semibold leading-[43.2px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Our Professional Members
        </motion.p>
      </header>

      {/* Team Cards with Animation */}
      <div className="flex justify-between">
        {data.map(({ src, position, name }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TeamCard image={src} role={position} name={name} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
