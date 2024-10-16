"use client";

import Navigation from "@/components/nav";
import Paper from "./paper";
import { useVollStore } from "./state";
import { cursors, keys } from "../constants";
import { cn } from "@/lib/utils";

export default function VollComponent() {
  const { activeCursor, setActiveCursor, setActiveTool } = useVollStore(
    (state) => state
  );

  const handleCancel = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === keys.escape) {
      setActiveTool(null);
      setActiveCursor(cursors.default);
    }
  };

  return (
    <div
      className="h-[calc(100vh)] outline-none"
      onKeyDown={handleCancel}
      tabIndex={0}
    >
      <Navigation
        className={
          "absolute top-0 w-full h-[calc(5vh)] items-center justify-between flex backdrop-blur-sm z-10"
        }
      />
      <Paper className={cn("h-[calc(100vh)] w-[calc(100vw)]", activeCursor)} />
    </div>
  );
}
