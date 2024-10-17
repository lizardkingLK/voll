"use client";

import React, { useCallback, useEffect } from "react";
import { buttonMap } from "./buttons";
import { toolTypes } from "./enums";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePaperStore } from "../voll/paper/state";
import { useVollStore } from "../voll/state";
import { eventTypes } from "../voll/paper/enums";

export default function Toolbar() {
  const { activeTool, setActiveCursor, setActiveTool } = useVollStore(
    (state) => state
  );
  const { elements, clearEventType, cordinate, eventType } = usePaperStore(
    (state) => state
  );

  const handleClick = (toolType: toolTypes, cursor: string) => {
    setActiveCursor(cursor);
    setActiveTool(toolType);
  };

  const toggleDraw = useCallback(() => {
    if (!cordinate || eventType === null) {
      return;
    }

    if (activeTool === toolTypes.select) {
      if (eventType === eventTypes.down) {
        const elementIndex = elements.findIndex(
          (element) => element.tool === toolTypes.select
        );
        if (elementIndex !== -1) {
          elements[elementIndex].cordinates = [cordinate];
          return;
        }
        elements.push({ tool: activeTool, cordinates: [cordinate] });
      } else if (eventType === eventTypes.move) {
        const elementIndex = elements.findIndex(
          (element) => element.tool === toolTypes.select
        );
        if (elementIndex !== -1) {
          elements[elementIndex].cordinates[1] = cordinate;
        }
      } else if (eventType === eventTypes.up) {
        const elementIndex = elements.findIndex(
          (element) => element.tool === toolTypes.select
        );
        if (elementIndex !== -1) {
          console.log({
            start: elements[elementIndex].cordinates[0],
            end: elements[elementIndex].cordinates[1],
          });
          elements.splice(elementIndex, 1);
        }
      }
    }
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
