// Themes

// BASE
import BaseLCAN001 from "./base";
import BaseTest from "./test";

// CHICAGO
import ChicagoLCAN001 from "./chicago";

// DUBLIN
import DublinLCAN001 from "./dublin";

// ROMA
import RomaLCAN001 from "./roma";

export const themes = [
  {
    title: "base",
    LCAN001: BaseLCAN001,
    test: BaseTest,
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
