// Themes

// BASE
import BaseLC001 from "./base";
import BaseTest from "./test";

// CHICAGO
import ChicagoLC001 from "./chicago";

// DUBLIN
import DublinLC001 from "./dublin";

// ROMA
import RomaLC001 from "./roma";

export const themes = [
  {
    title: "base",
    LC001: BaseLC001,
    test: BaseTest,
  },
  {
    title: "dublin",
    LC001: DublinLC001,
  },
  {
    title: "roma",
    LC001: RomaLC001,
  },
  {
    title: "chicago",
    LC001: ChicagoLC001,
  },
];
