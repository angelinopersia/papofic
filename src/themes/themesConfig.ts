// Themes

// DEFAULT
import DefaultCancel from "./default/cancel";
import DefaultTest from "./default/test";

// DUBLIN
import DublinCancel from "./dublin/cancel";
import DublinTest from "./dublin/test";

// ROMA
import RomaCancel from "./roma/cancel";

// CHICAGO
import ChicagoCancel from "./chicago/cancel";

export const themes = [
  {
    title: "default",
    cancel: DefaultCancel,
    test: DefaultTest,
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
    chicago: "tomato",
    default: "#000000",
    dublin: "#ade4c5",
    roma: "#D8E1E8",
  },
};
