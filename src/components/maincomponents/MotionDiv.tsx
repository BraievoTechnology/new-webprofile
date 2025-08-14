"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export type MotionDivProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  )
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
