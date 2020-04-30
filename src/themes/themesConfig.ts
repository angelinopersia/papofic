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

const models = ["cancel", "test"];

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

let obj = {};
for (let m = 0; m < models.length; m++) {
  const clonedObj = { ...obj };
  const modelTitle = models[m];
  clonedObj[modelTitle] = {};

  for (let t = 0; t < themes.length; t++) {
    const themeTitle = themes[t].title;

    if (themes[t][modelTitle]) {
      clonedObj[modelTitle][themeTitle] = colors[modelTitle][themeTitle];
    }
  }
  // console.log(clonedObj);
  obj = clonedObj;
}
