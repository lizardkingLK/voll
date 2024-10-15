import { create } from "zustand";
import { paperStoreState } from "./types";

export const usePaperStore = create<paperStoreState>((set) => ({
  paper: null,
  initializePaper: (state: React.MutableRefObject<null>) => set(() => ({ paper: state })),
}));
