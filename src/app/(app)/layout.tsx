import { FloatingDockDemo } from "@/components/dock-menu";
import MenuBar from "@/components/menu-bar";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/images/wellper.jpg')] bg-cover h-screen w-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 h-full">{children}</div>
      <FloatingDockDemo />
    </div>
  );
}

export default AppLayout;
