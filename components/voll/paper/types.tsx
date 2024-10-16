import { toolTypes } from "@/components/toolbar/enums";
import { MutableRefObject } from "react";

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
  cordinates: cordinatesType[];
  setCordinates: (state: cordinatesType[]) => void;
  cordinate: cordinatesType | null;
  clickedEvent: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
