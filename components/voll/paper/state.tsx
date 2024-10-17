import { create } from "zustand";
import { createElementInputType, paperStoreState } from "./types";
import { eventTypes } from "./enums";

export const usePaperStore = create<paperStoreState>((set) => ({
  elements: [],
  setElements: (state: createElementInputType[]) =>
    set(() => ({ elements: state })),
  paper: null,
  initializePaper: (state: React.MutableRefObject<null>) =>
    set(() => ({ paper: state })),
  cordinate: null,
  eventType: null,
  mouseEvent: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    eventType: eventTypes
  ) =>
    set(() => ({
      cordinate: { x: event.clientX, y: event.clientY },
      eventType: eventType,
    })),
  clearEventType: () => set(() => ({ eventType: null })),
}));
