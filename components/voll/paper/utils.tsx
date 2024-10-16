import { createElement } from "react";
import { cordinatesType } from "./types";
import { colors, elementTypes } from "@/components/constants";

export const createSelection = (
  cordinateStart: cordinatesType,
  cordinateEnd: cordinatesType,
  key: string | number
) => {
  const { x: startX, y: startY } = cordinateStart;
  const { x: endX, y: endY } = cordinateEnd;

  const width = Math.abs(startX - endX);
  const height = Math.abs(startY - endY);
  const left = endX > startX ? `${startX}px` : `${endX}px`;
  const top = endY > startY ? `${startY}px` : `${endY}px`;

  return createElement(
    elementTypes.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      fill: "none",
      key,
      style: {
        position: "absolute",
        top,
        left,
      },
    },
    createElement(elementTypes.rect, {
      width,
      height,
      fillOpacity: 0,
      style: { strokeWidth: 2, stroke: colors.select, strokeDasharray: 2 },
    })
  );
};
