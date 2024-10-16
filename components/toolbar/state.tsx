import { create } from "zustand";
import { toolbarStoreState } from "./types";
import React from "react";

export const useToolbarStore = create<toolbarStoreState>((set) => ({
  currentElement: null,
  setCurrentElement: (state: React.MutableRefObject<null>) =>
    set(() => ({ currentElement: state })),
}));
