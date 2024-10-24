"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Finder",
      icon: (
        <Image
          src={"/images/icons/finder.avif"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full"
        />
      ),
      href: "#",
    },
    {
      title: "Calculator",
      icon: (
        <Image
          src={"/images/icons/calculator.avif"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full"
        />
      ),
      href: "#",
    },
    {
      title: "Notes",
      icon: (
        <Image
          src={"/images/icons/notes.avif"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full"
        />
      ),
      href: "#",
    },
    {
      title: "Safari",
      icon: (
        <Image
          src={"/images/icons/safari.avif"}
          height={600}
          width={600}
          alt=""
          className="h-full w-full"
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
          className="h-full w-full"
        />
      ),
      href: "#",
    },
  ];
  return (
    <div className="shrink-0 mx-auto">
      <FloatingDock items={links} />
    </div>
  );
}
