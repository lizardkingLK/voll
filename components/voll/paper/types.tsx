import { toolTypes } from "@/components/toolbar/enums";
import { MutableRefObject } from "react";
import { eventTypes } from "./enums";

export type cordinatesType = { x: number; y: number };

export type createElementInputType = {
  tool: toolTypes;
  cordinates: cordinatesType[];
};

export type paperStoreState = {
  elements: createElementInputType[];
  setElements: (state: createElementInputType[]) => void;
  paper: MutableRefObject<null> | null;
  initializePaper: (state: MutableRefObject<null>) => void;
  cordinate: cordinatesType | null;
  eventType: eventTypes | null;
  mouseEvent: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    eventType: eventTypes
  ) => void;
  clearEventType: () => void;
};
