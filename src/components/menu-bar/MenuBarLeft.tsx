import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FaApple } from "react-icons/fa";

function MenuBarLeft() {
  const shortcarts = [
    {
      title: "Finder",
      optons: [
        {
          title: "About Finder",
        },
        {
          title: "Prefarences",
        },
        {
          title: "Hide Finder",
        },
      ],
    },
    {
      title: "Files",
      optons: [
        { title: "Open Files" },
        { title: "Open Resent" },
        { title: "Downloads" },
        { title: "Desktop" },
      ],
    },
    {
      title: "Edit",
      optons: [{ title: "Change Theme" }],
    },
  ];

  const appleIconShortcarts = [
    { title: "About This Mac" },
    { title: "About System Preferences" },
    { title: "About App Store" },
    { title: "Shut Down" },
    { title: "Restart" },
  ];

  return (
    <Menubar className="">
      <MenubarMenu>
        <MenubarTrigger className="py-0.5 mr-4">
          <FaApple size={20} />
        </MenubarTrigger>
        <MenubarContent>
          {appleIconShortcarts.map((option) => (
            <MenubarItem key={option.title}>{option.title}</MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      {shortcarts.map((shortcart) => (
        <MenubarMenu key={shortcart.title}>
          <MenubarTrigger className="">{shortcart.title}</MenubarTrigger>
          <MenubarContent>
            {shortcart.optons.map((options) => (
              <MenubarItem key={options.title}>{options.title}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}

export default MenuBarLeft;
