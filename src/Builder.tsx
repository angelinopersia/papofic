import React from "react";
import styled from "styled-components";
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
        <input
          name={input.name}
          placeholder={input.title}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: e.target.value,
            });
          }}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  width: 1000px;
  height: auto;
  box-shadow: 0px 0px 20px 1px #888888;
  border: 1px black solid;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Builder;
