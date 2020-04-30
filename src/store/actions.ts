import { Action } from "overmind";

export const changeValue: Action<any> = ({ state }, prop) => {
  state.data[prop.key] = prop.value;
};

export const changeTheme: Action<any> = ({ state }, prop) => {
  state.theme = prop.value;
};

export const addTheme: Action<any> = ({ state }, prop) => {
  state.themes = prop;
};
