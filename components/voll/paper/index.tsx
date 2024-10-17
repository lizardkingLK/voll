import React, { useEffect, useRef } from "react";
import { usePaperStore } from "./state";
import { CommonProps } from "@/components/types";
import { createSelection } from "./utils";
import { toolTypes } from "@/components/toolbar/enums";
import { eventTypes } from "./enums";

export default function Canvas({ className }: CommonProps) {
  const paperRef = useRef(null);
  const { elements, initializePaper, mouseEvent } = usePaperStore(
    (state) => state
  );

  useEffect(() => {
    initializePaper(paperRef);
  }, []);

  return (
    <div
      ref={paperRef}
      className={className}
      onMouseDown={(event) => mouseEvent(event, eventTypes.down)}
      onMouseMove={(event) => mouseEvent(event, eventTypes.move)}
      onMouseUp={(event) => mouseEvent(event, eventTypes.up)}
    >
      {elements.map(({ cordinates, tool }, index) => {
        if (tool === toolTypes.select) {
          const [cordinateStart, cordinateEnd] = cordinates;
          // console.log(elements.length);

          return createSelection(cordinateStart, cordinateEnd, index);
        }
      })}
    </div>
  );
}
