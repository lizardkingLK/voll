import { create } from "zustand";
import { vollStoreState } from "./type";
import { toolTypes } from "../toolbar/enums";
import { cursors } from "../constants";

export const useVollStore = create<vollStoreState>((set) => ({
  activeCursor: cursors.default,
  setActiveCursor: (state: string) => set(() => ({ activeCursor: state })),
  activeTool: null,
  setActiveTool: (state: toolTypes | null) =>
    set(() => ({ activeTool: state })),
}));
