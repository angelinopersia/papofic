import React, { useEffect, Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col, Layout } from "antd";
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
      <Row>
        {/* BUILDER */}
        <Col>
          <Builder />
        </Col>

        {/* VIEW */}
        <Col>
          <Layout>
            <ThemeProvider theme={theme}>
              <View />
            </ThemeProvider>
          </Layout>
        </Col>
      </Row>
    </Display>
  );
}

const Display = styled.div``;

export default App;
