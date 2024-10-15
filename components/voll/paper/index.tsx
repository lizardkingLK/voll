import { CommonProps } from "@/components/types";
import React, { useEffect, useRef } from "react";
import { usePaperStore } from "../../state";

export default function Canvas({ className }: CommonProps) {
  const paperRef = useRef(null);
  const { initializePaper } = usePaperStore((state) => state);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log({ x: event.clientX, y: event.clientY });
  };

  const handleCancel = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log(event.type);
  };

  useEffect(() => {
    initializePaper(paperRef);
  }, []);

  return (
    <div
      ref={paperRef}
      className={className}
      onDragStart={() => console.log("dragstart")}
      onClick={handleClick}
      onDoubleClick={handleCancel}
    ></div>
  );
}
