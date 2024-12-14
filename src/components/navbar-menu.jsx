import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { links } from "../data/menuItems";

export function NavbarMenu() {
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}
