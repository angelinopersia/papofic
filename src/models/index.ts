import { LGENCAN001 } from "./LGENCAN001/LGENCAN001";
import { LGENCAN002 } from "./LGENCAN002/LGENCAN002";
import { LGYMCAN001 } from "./LGYMCAN001/LGYMCAN001";

export const modelsB = {
  LGENCAN001: LGENCAN001.Builder,
  LGENCAN002: LGENCAN002.Builder,
  LGYMCAN001: LGYMCAN001.Builder,
};

export const modelsV = {
  LGENCAN001: LGENCAN001.View,
  LGENCAN002: LGENCAN002.View,
  LGYMCAN001: LGYMCAN001.View,
};

export const modelsTL = [
  LGENCAN001.Naming,
  LGENCAN002.Naming,
  LGYMCAN001.Naming,
];
