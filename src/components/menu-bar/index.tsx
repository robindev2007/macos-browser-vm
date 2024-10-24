import React from "react";
import MenuBarLeft from "./MenuBarLeft";
import MenuBarRight from "./MenuBarRight";

function MenuBar() {
  return (
    <div className="w-full p-2 border-b border-border/5 shadow backdrop-blur-md bg-[#161617]/30 py-0.5 flex gap-2 items-center justify-between">
      <MenuBarLeft />
      <MenuBarRight />
    </div>
  );
}

export default MenuBar;
