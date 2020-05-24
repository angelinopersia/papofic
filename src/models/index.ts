import { LCAN001 } from "./LCAN001/LCAN001";
import { LCAN002 } from "./LCAN002/LCAN002";
import { LCAN003 } from "./LCAN003/LCAN003";

export const modelsB = {
  LCAN001: LCAN001.Builder,
  LCAN002: LCAN002.Builder,
  LCAN003: LCAN003.Builder,
};

export const modelsV = {
  LCAN001: LCAN001.View,
  LCAN002: LCAN002.View,
  LCAN003: LCAN003.View,
};

export const modelsTL = [LCAN001.Naming, LCAN002.Naming, LCAN003.Naming];
