import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Logo from "./svg/icon";
import { useOvermind } from "./store";
import Builder from "./Builder";
import View from "./View";
import { themes } from "./themes/themesConfig";

import { LCAN001 } from "./models/LCAN001/LCAN001";
import { LCAN002 } from "./models/LCAN002/LCAN002";
import { LCAN003 } from "./models/LCAN003/LCAN003";

import "./App.css";

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

const App = () => {
  const { state } = useOvermind();

  const getTheme = () => {
    let obj = {};
    for (let i = 0; i < themes.length; i++) {
      const clonedObj = { ...obj };
      const themeTitle = themes[i].title;
      clonedObj[themeTitle] = themes[i];
      obj = clonedObj;
    }
    return obj[state.theme][state.theme];
  };

  const theme = getTheme();

  return (
    <Display>
      <BuilderSide>
        <Builder />
      </BuilderSide>
      <ViewSide>
        {state.model !== "" ? (
          <ThemeProvider theme={theme}>
            <View />
          </ThemeProvider>
        ) : (
          <div>
            <Logo />
          </div>
        )}
      </ViewSide>
    </Display>
  );
};

const Display = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const BuilderSide = styled.div`
  grid-column: 1 / 2;
  background-color: #30404d;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ViewSide = styled.div`
  grid-column: 2 / 2;
  background-color: #bfccd6;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export default App;
