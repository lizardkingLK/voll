import { Circle, Square, Slash, TextCursor, BoxSelect } from "lucide-react";
import { toolTypes } from "./enums";
import { cursors } from "../constants";

export const buttonMap = [
  {
    icon: <BoxSelect />,
    type: toolTypes.select,
    cursor: cursors.pointer,
  },
  {
    icon: <TextCursor />,
    type: toolTypes.text,
    cursor: cursors.text,
  },
  {
    icon: <Circle />,
    type: toolTypes.circle,
    cursor: cursors.crosshair,
  },
  {
    icon: <Square />,
    type: toolTypes.rectangle,
    cursor: cursors.crosshair,
  },
  {
    icon: <Slash />,
    type: toolTypes.line,
    cursor: cursors.crosshair,
  },
];
