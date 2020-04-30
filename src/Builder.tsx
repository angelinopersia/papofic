import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Collapse,
  InputGroup,
  PanelStack,
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
import { CancelB } from "./models/Cancel";
import { TestB } from "./models/Test";
import { colors, themes } from "./themes/themesConfig";

const models = {
  cancel: CancelB,
  test: TestB,
};

const Builder = () => {
  return (
    <Container className="bp3-dark">
      <PanelStack
        initialPanel={{
          component: ModelsPanel,
          title: "Papofic",
        }}
      />
    </Container>
  );
};

const ModelsPanel = (props: any) => {
  return (
    <>
      <Button
        onClick={() =>
          props.openPanel({
            title: "Create a new repository",
            component: TabsPanel,
          })
        }
      >
        Suivant
      </Button>
    </>
  );
};

const TabsPanel = () => {
  const { panelZero, panelOne } = usePanel();

  return (
    <Tabs>
      <Tab id="0" panel={panelZero} title="Données" />
      <Tab id="1" panel={panelOne} title="Thèmes" />
    </Tabs>
  );
};

const useInput = () => {
  const { actions } = useOvermind();

  // DATE FORMATTING FUNCTION
  const getMomentFormatter = (format: string): IDateFormatProps => ({
    formatDate: (date, locale = "fr") =>
      moment(date).locale(locale).format("LL"),
    parseDate: (str, locale = "fr") =>
      moment(str, "LL").locale(locale).toDate(),
    placeholder: format,
  });

  const renderInput = (input) => {
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
    }

    if (input.type === "singleDate") {
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
    }

    if (input.type === "doubleDate") {
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
    }

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
  };

  return { renderInput };
};

const usePanel = () => {
  const { state, actions } = useOvermind();
  const [list, setList] = useState({});
  const { renderInput } = useInput();

  const genericModel = models[state.model];
  const getFirstLetter = (s) => s.split("").splice(0, 1).join().toUpperCase();
  const getRightIcon = (id: string) => (id ? "chevron-left" : "chevron-down");

  useEffect(() => {
    const groups = createCollapseGroup();
    setList(groups);
  }, []);

  const createCollapseGroup = () => {
    const modelB = models[state.model];

    let obj = {};
    for (let i = 0; i < Object.keys(modelB).length; i++) {
      const clonedObj = { ...obj };
      const modelId = modelB[i].id;

      if (i === 0) clonedObj[modelId] = true;
      else clonedObj[modelId] = false;

      obj = clonedObj;
    }

    return obj;
  };

  // COLLAPSE FUNCTION
  const handleClick = (id) => {
    const newList = { ...list };
    newList[id] = !newList[id];
    setList(newList);
  };

  const panelZero = genericModel.map((type, i) => (
    <CatCard>
      <Button
        alignText="left"
        fill
        large
        onClick={() => handleClick(type.id)}
        rightIcon={getRightIcon(list[type.id])}
      >
        {type.title}
      </Button>

      <Collapse isOpen={list[type.id]} keepChildrenMounted>
        <Grid>
          {genericModel[i].items.map((j) => (
            <Row
              key={j.name}
              isDate={j.type === "singleDate"}
              isFullRow={j.fullRow}
            >
              {renderInput(j)}
            </Row>
          ))}
        </Grid>
      </Collapse>
    </CatCard>
  ));

  const panelOne = (
    <Card>
      <ThemeDisplay>
        {themes.map(
          (theme) =>
            theme[state.model] && (
              <ThemeContainer>
                <ThemeThumbnail
                  onClick={() => {
                    actions.changeTheme({
                      value: theme.title,
                    });
                  }}
                  theme={state.theme}
                  title={theme.title}
                >
                  <ThemeLogo input={theme} state={state}>
                    {getFirstLetter(theme.title)}
                  </ThemeLogo>
                </ThemeThumbnail>

                <ThemeTitle>Thème {theme.title}</ThemeTitle>
              </ThemeContainer>
            ),
        )}
      </ThemeDisplay>
    </Card>
  );

  return { panelZero, panelOne };
};

const Container = styled.div`
  position: relative;
  height: auto;
  padding: 15px;

  .bp3-panel-stack {
    height: 100vh !important;
    overflow: inherit;
  }

  .bp3-panel-stack-view {
    background-color: transparent !important;
  }

  .bp3-panel-stack-view {
    margin-right: 0;
    overflow-y: inherit;
    border: 0;
  }
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
  margin: 5px;

  .bp3-control-group {
    display: grid;
    grid: auto / 1fr 1fr;
    padding: 5px 10px 5px 0px;
  }
`;

const CatCard = styled(Card)`
  padding: 0 0 1px 0;
  margin: 0 0 20px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 5px;
`;

const Row = styled.div<{ isDate: boolean; isFullRow: boolean }>`
  grid-column: ${(p) => p.isFullRow && "1 / 3"};

  align-self: center;
  padding: ${(p) => (p.isDate ? "0 10px 0 0" : 0)};
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
  border-radius: 10px;
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
