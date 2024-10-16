"use client";

import React, { useCallback, useEffect } from "react";
import { buttonMap } from "./buttons";
import { toolTypes } from "./enums";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePaperStore } from "../voll/paper/state";
import { useVollStore } from "../voll/state";

export default function Toolbar() {
  const { activeTool, setActiveCursor, setActiveTool } = useVollStore(
    (state) => state
  );
  const { elements, setElements, cordinate, cordinates, setCordinates } =
    usePaperStore((state) => state);

  const handleClick = (toolType: toolTypes, cursor: string) => {
    setActiveCursor(cursor);
    setActiveTool(toolType);
  };

  const toggleDraw = useCallback(() => {
    let tempElements = elements;
    let tempCordinates = cordinates;
    if (!cordinate) {
      return;
    }

    tempCordinates.push(cordinate);

    switch (activeTool) {
      case toolTypes.select:
        {
          if (tempCordinates.length === 2) {
            tempElements = tempElements.filter(
              (element) => element.tool !== toolTypes.select
            );
            tempElements.push({ tool: activeTool, cordinates: tempCordinates });
            tempCordinates = [];
          }
        }
        break;

      default:
        break;
    }

    setCordinates(tempCordinates);
    setElements(tempElements);
  }, [cordinate]);

  useEffect(() => {
    toggleDraw();
  }, [toggleDraw]);

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
              "hover:text-primary focus-visible:ring-0",
              activeTool === type ? "text-primary" : ""
            )}
          >
            {icon}
          </Button>
        );
      })}
    </div>
  );
}
