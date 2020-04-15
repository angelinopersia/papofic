import { IConfig } from "overmind";
import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";
// import * as effects from "./effects";

export const config = {
  state,
  actions,
  //   effects,
};

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
