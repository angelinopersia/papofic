import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Collapse,
  InputGroup,
  Tab,
  Tabs,
  TextArea,
} from "@blueprintjs/core";
import {
  DateInput,
  DateRangeInput,
  IDateFormatProps,
} from "@blueprintjs/datetime";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/fr";
import moment from "moment";

import { useOvermind } from "./store";
import { CancelB, CancelL } from "./models/Cancel";
import { TestB } from "./models/Test";
import { colors, themes } from "./themes/themesConfig";

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
  const genericList = lists[state.model];
  const genericModel = models[state.model];

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

  // DATE FORMATTING FUNCTION
  function getMomentFormatter(format: string): IDateFormatProps {
    return {
      formatDate: (date, locale = "fr") =>
        moment(date).locale(locale).format("LL"),
      parseDate: (str, locale = "fr") =>
        moment(str, "LL").locale(locale).toDate(),
      placeholder: format,
    };
  }

  const returnInput = (input) => {
    if (input.type === "textArea") {
      return (
        <InputArea
          growVertically
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: e.target.value,
            });
          }}
          placeholder={input.title}
        />
      );
    } else if (input.type === "singleDate") {
      return (
        <DateSingle
          formatDate={(date) => date.toLocaleString()}
          locale="fr"
          localeUtils={MomentLocaleUtils}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: moment(e).locale("fr").format("LL"),
            });
          }}
          parseDate={(str) => new Date(str)}
          placeholder={input.title}
          {...getMomentFormatter(input.title)}
        />
      );
    } else if (input.type === "doubleDate") {
      return (
        <DateDouble
          allowSingleDayRange
          formatDate={(date) => date.toLocaleString()}
          locale="fr"
          localeUtils={MomentLocaleUtils}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: [
                moment(e[0]).locale("fr").format("LL"),
                moment(e[1]).locale("fr").format("LL"),
              ],
            });
          }}
          parseDate={(str) => new Date(str)}
          placeholder={input.title}
          shortcuts={false}
          {...getMomentFormatter(input.title)}
        />
      );
    } else {
      return (
        <Input
          leftIcon={input.icon}
          name={input.name}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: e.target.value,
            });
          }}
          placeholder={input.title}
        />
      );
    }
  };

  const getFirstLetter = (prop) => {
    let letter = prop;
    letter = letter.split("").splice(0, 1).join().toUpperCase();
    return letter;
  };

  return (
    <Container className="bp3-dark">
      <Tabs>
        <Tab
          id="0"
          panel={genericModel.map((type, i) => (
            <CatCard>
              <div>
                <Button
                  alignText="left"
                  fill
                  large
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
                          {returnInput(input)}
                        </div>
                      ))}
                    </>
                  </div>
                </Collapse>
              </div>
            </CatCard>
          ))}
          title="Données"
        />
        <Tab
          id="1"
          panel={
            <Card>
              <ThemeDisplay>
                {themes.map(
                  (input, i) =>
                    input[state.model] && (
                      <ThemeContainer>
                        <ThemeThumbnail
                          onClick={(e) => {
                            actions.changeTheme({
                              value: input.title,
                            });
                          }}
                          theme={state.theme}
                          title={input.title}
                        >
                          <ThemeLogo input={input} state={state}>
                            {getFirstLetter(input.title)}
                          </ThemeLogo>
                        </ThemeThumbnail>
                        <ThemeTitle>Thème {input.title}</ThemeTitle>
                      </ThemeContainer>
                    ),
                )}
              </ThemeDisplay>
            </Card>
          }
          title="Thèmes"
        />
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
  margin: 5px;
`;

const InputArea = styled(TextArea)`
  min-height: 40px;
  width: calc(100% - 10px);
  margin: 5px;
  resize: none;
`;

const DateSingle = styled(DateInput)`
  width: calc(100% - 10px);
  margin: 5px;
`;

const DateDouble = styled(DateRangeInput)`
  /* width: calc(100% - 10px); */
  margin: 5px;
`;

const CatCard = styled(Card)`
  padding: 0 0 1px 0;
  margin: 0 0 20px 0;
`;

const ThemeDisplay = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ThemeThumbnail = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1em;
  cursor: pointer;
  border: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "#33b0ec 5px solid" : "#222f37 5px solid"};
  pointer-events: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "none" : "all"};
  &:hover {
    border: 5px #b7e7ff solid;
  }
`;

const ThemeLogo = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: ${(props) => colors[props.state.model][props.input.title]};
  user-select: none;
`;

const ThemeTitle = styled.span`
  margin: 5px;
  padding-bottom: 4px;
  border-bottom: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "#33b0ec 3px solid" : "transparent 3px solid"};
  color: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "#33b0ec" : ""};
  user-select: none;
`;

export default Builder;
