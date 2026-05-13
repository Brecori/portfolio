"use client";

import { FC } from "react";
import { ResponsiveElement } from "@/lib/ResponsiveElement";
import { NavbarDesktop } from "./Desktop";
import { NavbarMobile } from "./Mobile";

export const Navbar: FC = () => {
  return (
    <ResponsiveElement
      content={<NavbarDesktop />}
      breakpoints={{ ipadVertical: <NavbarMobile /> }}
    />
  );
};
