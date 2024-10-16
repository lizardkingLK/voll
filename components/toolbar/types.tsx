import { MutableRefObject } from "react";

export type toolbarStoreState = {
  currentElement: MutableRefObject<null> | null;
  setCurrentElement: (state: MutableRefObject<null>) => void;
};
