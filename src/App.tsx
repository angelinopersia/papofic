import React, { useEffect, Component } from "react";
import styled from "styled-components";
import { Row, Col, Layout } from "antd";
import Model from "./view/Model";
import Sidebar from "./builder/Sidebar";
import "./App.css";

function App() {
  return (
    <Display>
      <Row>
        <Col>
          <Sidebar />
        </Col>

        <Col>
          <Layout>
            <Model />
          </Layout>
        </Col>
      </Row>
    </Display>
  );
}

const Display = styled.div``;

export default App;
