import { Action } from "overmind";

export const changeValue: Action<any> = ({ state }, prop) => {
  state.data[prop.key] = prop.value;
};
