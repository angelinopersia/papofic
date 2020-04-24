/* eslint-disable indent */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Collapse,
  Icon,
  InputGroup,
  Intent,
  Tab,
  Tabs,
  TextArea,
  Divider,
  Position,
} from "@blueprintjs/core";
import { DateInput, IDateFormatProps } from "@blueprintjs/datetime";
import { LocaleUtils } from "react-day-picker";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/fr";

import { useOvermind } from "./store";
import { CancelB, CancelL } from "./models/Cancel";
import { TestB } from "./models/Test";

// MODELS
const models = {
  cancel: CancelB,
  test: TestB,
};

// LISTS
const lists = {
  cancel: CancelL,
  test: CancelL,
};

const Builder = () => {
  // OVERMIND
  const { state, actions } = useOvermind();

  // GENERIC
  const genericModel = models[state.model];
  const genericList = lists[state.model];

  // USESTATE
  const [list, setList] = useState({});

  // USEEFFECT
  useEffect(() => {
    setList(genericList);
  }, []);

  // COLLAPSE FUNCTION
  const handleClick = (id) => {
    const newList = { ...list };
    newList[id] = !newList[id];
    setList(newList);
  };

  const returnSmth = (input) => {
    if (input.type === "textArea") {
      return <InputArea placeholder={input.title} growVertically />;
      // eslint-disable-next-line no-else-return
    } else if (input.type === "date") {
      return (
        <DateInput
          formatDate={(date) => date.toLocaleString()}
          parseDate={(str) => new Date(str)}
          placeholder={input.title}
          localeUtils={MomentLocaleUtils}
          locale="fr"
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              // value: e.target.value,
            });
          }}
        />
      );
    } else {
      return (
        <Input
          name={input.name}
          placeholder={input.title}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: e.target.value,
            });
          }}
          leftIcon={input.icon}
        />
      );
    }
  };

  return (
    <Container className="bp3-dark">
      {genericModel.map((type, i) => (
        <CatCard>
          <div>
            <Button
              large
              alignText="left"
              fill
              onClick={() => {
                handleClick(type.id);
              }}
              rightIcon={
                list[type.id] === true ? "chevron-left" : "chevron-down"
              }
            >
              {type.title}
            </Button>
            <Collapse isOpen={list[type.id]} keepChildrenMounted>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "50% 50%",
                  margin: "5px",
                }}
              >
                <>
                  {genericModel[i].items.map((input) => (
                    <div
                      style={
                        input.fullRow
                          ? {
                              gridColumn: "1 / 3",
                            }
                          : {}
                      }
                    >
                      {returnSmth(input)}
                    </div>
                  ))}
                </>
              </div>
            </Collapse>
          </div>
        </CatCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: auto;
  padding: 15px;
`;

const Input = styled(InputGroup)`
  margin: 5px;
`;

const InputArea = styled(TextArea)`
  width: calc(100% - 10px);
  min-height: 40px;
  margin: 5px;
  resize: none;
`;

const CatCard = styled(Card)`
  padding: 0 0 1px 0;
  margin: 0 0 20px 0;
`;

export default Builder;

// eslint-disable-next-line no-lone-blocks
{
  /* <Tab
    id={i}
    title={type.title}
    panel={
      // eslint-disable-next-line react/jsx-wrap-multilines
      <>
        {genericModel[i].items.map((input) => (
          <>
            <Input
              name={input.name}
              placeholder={input.title}
              onChange={(e) => {
                actions.changeValue({
                  key: input.name,
                  value: e.target.value,
                });
              }}
              style={
                input.position && {
                  display: "grid",
                  grid: "auto / 1fr 1fr",
                  gridGap: "8px",
                  alignItems: "center",
                }
              }
            />
          </>
        ))}
      </>
    }
  /> */
}
