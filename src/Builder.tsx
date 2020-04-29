/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
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
import { themes, colors } from "./themes/themesConfig";

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

  function getMomentFormatter(format: string): IDateFormatProps {
    // note that locale argument comes from locale prop and may be undefined

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
      return <InputArea placeholder={input.title} growVertically />;
      // eslint-disable-next-line no-else-return
    } else if (input.type === "singleDate") {
      return (
        <DateSingle
          formatDate={(date) => date.toLocaleString()}
          parseDate={(str) => new Date(str)}
          placeholder={input.title}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: moment(e).locale("fr").format("LL"),
            });
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getMomentFormatter(input.title)}
          locale="fr"
          localeUtils={MomentLocaleUtils}
        />
      );
    } else if (input.type === "doubleDate") {
      return (
        <DateDouble
          formatDate={(date) => date.toLocaleString()}
          parseDate={(str) => new Date(str)}
          placeholder={input.title}
          allowSingleDayRange
          shortcuts={false}
          onChange={(e) => {
            actions.changeValue({
              key: input.name,
              value: [
                moment(e[0]).locale("fr").format("LL"),
                moment(e[1]).locale("fr").format("LL"),
              ],
            });
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getMomentFormatter(input.title)}
          locale="fr"
          localeUtils={MomentLocaleUtils}
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

  const getFirstLetter = (prop) => {
    let letter = prop;
    letter = letter.split("").splice(0, 1).join().toUpperCase();
    return letter;
  };

  return (
    <Container className="bp3-dark">
      <Tabs>
        <Tab
          id="1"
          title="Données"
          panel={genericModel.map((type, i) => (
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
                          {returnInput(input)}
                        </div>
                      ))}
                    </>
                  </div>
                </Collapse>
              </div>
            </CatCard>
          ))}
        />
        <Tab
          id="2"
          title="Thèmes"
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
                        >
                          <ThemeLogo state={state} input={input}>
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
  width: calc(100% - 10px);
  min-height: 40px;
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
  justify-content: center;
  border: #222f37 5px solid;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  width: 150px;
  height: 150px;
  align-items: center;
`;

const ThemeLogo = styled.span`
  font-size: 70px;
  font-weight: 700;
  color: ${(props) => colors[props.state.model][props.input.title]};
  user-select: none;
`;

const ThemeTitle = styled.span`
  margin: 5px;
`;

export default Builder;
