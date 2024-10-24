"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function DesktopApps() {
  const appContainerRef = useRef(null);

  const desktopApps = [
    {
      title: "Finder",
      icon: (
        <Image
          src={"/images/icons/finder.avif"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full pointer-events-none"
        />
      ),
      href: "#",
    },
    {
      title: "About Me",
      icon: (
        <Image
          src={"/images/icons/about-me.png"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full pointer-events-none"
        />
      ),
      href: "#",
    },
  ];

  return (
    <div ref={appContainerRef} className="h-full p-3">
      {desktopApps.map((app) => (
        <motion.div
          key={app.title}
          drag
          dragConstraints={appContainerRef}
          dragMomentum={false}
          dragElastic={false}
          whileDrag={{
            scale: 1.4,
          }}
          className="h-16 rounded-md w-16 drop-shadow-2xl">
          {app.icon}
        </motion.div>
      ))}
    </div>
  );
}

export default DesktopApps;
