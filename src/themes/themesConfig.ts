// Themes

// BASE
import BaseCancel, { primaryColor as base } from "./base/cancel";
import BaseTest from "./base/test";

// DUBLIN
import DublinCancel, { primaryColor as dublin } from "./dublin/cancel";
import DublinTest from "./dublin/test";

// ROMA
import RomaCancel, { primaryColor as roma } from "./roma/cancel";

// CHICAGO
import ChicagoCancel, { primaryColor as chicago } from "./chicago/cancel";

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

export const colors = {
  cancel: {
    chicago,
    base,
    dublin,
    roma,
  },
  test: {
    base,
    dublin,
  },
};
