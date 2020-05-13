// Themes

// BASE
import BaseLC001 from "./base/LC001";
import BaseTest from "./base/test";

// CHICAGO
import ChicagoLC001 from "./chicago/LC001";

// DUBLIN
import DublinLC001 from "./dublin/LC001";
import DublinTest from "./dublin/test";

// ROMA
import RomaLC001 from "./roma/LC001";

export const themes = [
  {
    title: "base",
    LC001: BaseLC001,
    test: BaseTest,
  },
  {
    title: "dublin",
    LC001: DublinLC001,
    test: DublinTest,
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
