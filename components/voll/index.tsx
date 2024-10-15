"use client";

import Navigation from "@/components/nav";
import Paper from "./paper";

export default function VollComponent() {
  return (
    <div className="h-[calc(100vh)]">
      <Navigation
        className={
          "absolute top-0 w-full h-[calc(5vh)] px-4 items-center justify-between flex backdrop-blur-sm z-10"
        }
      />
      <Paper className={"h-[calc(100vh)] w-[calc(100vw)]"} />
    </div>
  );
}
