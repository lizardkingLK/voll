import React, { useCallback, useEffect, useRef } from "react";
import { usePaperStore } from "./state";
import { CommonProps } from "@/components/types";
import { createSelection } from "./utils";
import { toolTypes } from "@/components/toolbar/enums";

export default function Canvas({ className }: CommonProps) {
  const paperRef = useRef(null);
  const { elements, initializePaper, clickedEvent } = usePaperStore(
    (state) => state
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      console.log("trigger");
      clickedEvent(event);
    },
    []
  );

  useEffect(() => {
    initializePaper(paperRef);
  }, []);

  return (
    <div ref={paperRef} className={className} onClick={handleClick}>
      {elements.map(({ cordinates, tool }, index) => {
        if (tool === toolTypes.select) {
          const [cordinateStart, cordinateEnd] = cordinates;
          console.log(elements.length);

          return createSelection(cordinateStart, cordinateEnd, index);
        }
      })}
    </div>
  );
}
