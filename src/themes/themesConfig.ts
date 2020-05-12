// Themes

// BASE
import BaseCancel from "./base/cancel";
import BaseTest from "./base/test";

// DUBLIN
import DublinCancel from "./dublin/cancel";
import DublinTest from "./dublin/test";

// ROMA
import RomaCancel from "./roma/cancel";

// CHICAGO
import ChicagoCancel from "./chicago/cancel";

export const themes = [
  {
    title: "base",
    cancel: BaseCancel,
    test: BaseTest,
  },
  {
    title: "dublin",
    cancel: DublinCancel,
    test: DublinTest,
  },
  {
    title: "roma",
    cancel: RomaCancel,
  },
  {
    title: "chicago",
    cancel: ChicagoCancel,
  },
];
