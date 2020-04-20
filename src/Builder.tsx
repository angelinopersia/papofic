import React from "react";
import styled from "styled-components";
import { Card, Input } from "antd";
import { useOvermind } from "./store";
import { CancelB } from "./models/Cancel";
import { TestB } from "./models/Test";

const models = {
  cancel: CancelB,
  test: TestB,
};

const Builder = () => {
  const { state, actions } = useOvermind();
  const genericModel = models[state.model];

  return (
    <Container>
      {genericModel.map((input) => (
        <Card title={input.title}>
          <Input
            name={input.name}
            placeholder={input.title}
            onChange={(e) => {
              actions.changeValue({
                key: input.name,
                value: e.target.value,
              });
            }}
          />
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  /* display: grid;
  grid-template-columns: 32.5% 32.5% 32.5%;
  grid-gap: 10px;
  padding: 15px;
  width: 900px; */
  padding: 15px;
  height: auto;
`;

export default Builder;
