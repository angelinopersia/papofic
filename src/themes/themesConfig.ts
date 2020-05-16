// Themes

// BASE
import Base from "./base";

// CHICAGO
import ChicagoLCAN001 from "./chicago";

// DUBLIN
import DublinLCAN001 from "./dublin";

// ROMA
import RomaLCAN001 from "./roma";

export const themes = [
  {
    title: "base",
    LCAN001: Base,
    LCAN002: Base,
  },
  {
    title: "dublin",
    LCAN001: DublinLCAN001,
  },
  {
    title: "roma",
    LCAN001: RomaLCAN001,
  },
  {
    title: "chicago",
    LCAN001: ChicagoLCAN001,
  },
];
