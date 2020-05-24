import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Logo from "./svg/icon";
import { useOvermind } from "./store";
import Builder from "./Builder";
import View from "./View";
import { themes } from "./themes";
import "./App.css";

const App = () => {
  const { state } = useOvermind();

  const getTheme = () => {
    // Fetches data from nameless objects in the themes array and
    // identifies them in "obj"
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
