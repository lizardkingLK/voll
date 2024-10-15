"use client";

import React, { useCallback, useEffect, useState } from "react";
import { buttonMap } from "./buttons";
import { toolTypes } from "./enums";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePaperStore } from "../state";
import { cursors } from "./constants";

export default function Toolbar() {
  const { paper } = usePaperStore((state) => state);
  const [activeButton, setActiveButton] = useState<toolTypes | null>(null);
  const [activeCursor, setActiveCursor] = useState<string>(cursors.pointer);

  const handleCursor = useCallback(() => {
    const current = paper?.current as HTMLDivElement | null;
    if (!current) {
      return;
    }

    current.classList.remove(...Object.values(cursors));
    current.classList.add(activeCursor);
  }, [activeCursor]);

  const handleClick = (toolType: toolTypes, cursor: string) => {
    const voll = paper?.current;
    if (!voll) {
      return;
    }

    console.log(voll);

    switch (toolType) {
      case toolTypes.line:
        {
        }
        break;

      default:
        break;
    }

    setActiveCursor(cursor);
    setActiveButton(toolType);
  };

  useEffect(() => {
    handleCursor();
  }, [handleCursor]);

  return (
    <div className="flex space-x-4 items-center">
      {buttonMap.map((button, index) => {
        const { icon, type, cursor } = button;
        return (
          <Button
            key={index}
            onClick={() => handleClick(type, cursor)}
            variant={"ghost"}
            size={"icon"}
            className={cn(
              activeButton === type ? "text-primary" : "",
              "hover:text-primary"
            )}
          >
            {icon}
          </Button>
        );
      })}
    </div>
  );
}
