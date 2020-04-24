import React, { useEffect, Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useOvermind } from "./store";
import View from "./View";
import Builder from "./Builder";
import "./App.css";

// Themes
import DefaultCancel from "./themes/default/cancel";
import DefaultTest from "./themes/default/test";

import PikachuCancel from "./themes/pikachu/cancel";
import PikachuTest from "./themes/pikachu/test";

import RomaCancel from "./themes/roma/cancel";

const themes = {
  default: {
    cancel: DefaultCancel,
    test: DefaultTest,
  },
  pikachu: {
    cancel: PikachuCancel,
    test: PikachuTest,
  },
  roma: {
    cancel: RomaCancel,
  },
};

function App() {
  const { state } = useOvermind();

  const theme = themes[state.theme][state.model];

  return (
    <Display>
      <BuilderSide>
        <Builder />
      </BuilderSide>
      <ViewSide>
        <ThemeProvider theme={theme}>
          <View />
        </ThemeProvider>
      </ViewSide>
    </Display>
  );
}

const Display = styled.div`
  display: grid;
  grid-template-columns: 400px auto;
`;

const BuilderSide = styled.div`
  grid-column: 1 / 2;
  background-color: #30404d;
`;

const ViewSide = styled.div`
  background-color: #efefef;
  grid-column: 2 / 2;
`;

export default App;
