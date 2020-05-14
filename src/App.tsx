import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Logo from "./svg/icon";
import { useOvermind } from "./store";
import Builder from "./Builder";
import View from "./View";
import { themes } from "./themes/themesConfig";

import { LCAN001 } from "./models/LCAN001/LCAN001";
import { Test } from "./models/test/Test";

import "./App.css";

export const modelsB = {
  LCAN001: LCAN001.Builder,
  test: Test.Builder,
};

export const modelsV = {
  LCAN001: LCAN001.View,
  test: Test.View,
};

export const modelsTL = [LCAN001.Translation, Test.Translation];

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

    return obj[state.theme][state.model];
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
  grid-template-columns: 420px auto;
`;

const BuilderSide = styled.div`
  grid-column: 1 / 2;
  background-color: #30404d;
  overflow: hidden;
`;

const ViewSide = styled.div`
  grid-column: 2 / 2;
  background-color: #bfccd6;
`;

export default App;
