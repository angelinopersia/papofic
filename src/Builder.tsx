import React from "react";
import styled from "styled-components";
import { Tab, Tabs, Card, InputGroup } from "@blueprintjs/core";
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
    <Container className="bp3-dark">
      <Tabs id="TabsExample" key="horizontal" renderActiveTabPanelOnly={false}>
        {genericModel.map((type, i: number) => (
          <Tab
            id={i}
            title={type.title}
            panel={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <Card>
                {genericModel[i].items.map((input) => (
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
                ))}
              </Card>
            }
          />
        ))}
      </Tabs>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: auto;
  padding: 15px;
`;

const Input = styled(InputGroup)`
  margin: 15px 0 15px 0;
`;

export default Builder;
