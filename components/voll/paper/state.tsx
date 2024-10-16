import { create } from "zustand";
import {
  cordinatesType,
  createElementInputType,
  paperStoreState,
} from "./types";

export const usePaperStore = create<paperStoreState>((set) => ({
  elements: [],
  setElements: (state: createElementInputType[]) =>
    set(() => ({ elements: state })),
  paper: null,
  initializePaper: (state: React.MutableRefObject<null>) =>
    set(() => ({ paper: state })),
  cordinates: [],
  setCordinates: (state: cordinatesType[]) =>
    set(() => ({ cordinates: state })),
  cordinate: null,
  clickedEvent: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    set(() => ({
      cordinate: { x: event.clientX, y: event.clientY },
    })),
}));
