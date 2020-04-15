import { Action } from "overmind";

export const changeValue: Action<any> = ({ state }, prop) => {
  // SENDER INFO
  if (prop.key === "firstName") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "lastName") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "address") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "postcode") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "city") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "phone") {
    state.data.sender[prop.key] = prop.value;
  } else if (prop.key === "email") {
    state.data.sender[prop.key] = prop.value;
  } else {
    console.log("error");
  }
};
