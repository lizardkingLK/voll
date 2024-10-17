import { toolTypes } from "../toolbar/enums";

export type vollStoreState = {
    activeCursor: string;
    setActiveCursor: (state: string) => void;
    activeTool: toolTypes | null;
    setActiveTool: (state: toolTypes | null) => void;
}