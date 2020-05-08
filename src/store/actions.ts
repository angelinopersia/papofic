import { Action } from "overmind";

export const changeValue: Action<any> = ({ state }, prop) => {
  state.data[prop.key] = prop.value;
};

export const changeTheme: Action<any> = ({ state }, prop) => {
  state.theme = prop.value;
};

export const changeModel: Action<any> = ({ state }, prop) => {
  state.model = prop;
};

export const addTheme: Action<any> = ({ state }, prop) => {
  state.themes = prop;
};

export const clearData: Action<any> = ({ state }, prop) => {
  if (state.model !== prop) {
    state.data = {};
    state.theme = "base";
  }
};
