import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../themes/toggle";
import Toolbar from "../toolbar";
import { CommonProps } from "../types";

export default function Navigation({ className }: CommonProps) {
  return (
    <nav className={className}>
      <div className="pl-4">
        <Link href={"/"}>VOLL</Link>
      </div>
      <div>
        <Toolbar />
      </div>
      <div className="pr-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
