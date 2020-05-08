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
import { backgrounds } from "./backgrounds/index";
import { useOvermind } from "./store";
import { themes } from "./themes/themesConfig";
import { modelsB, modelsTL } from "./App";

const Builder = () => (
  <Container className="bp3-dark">
    <PanelStack
      initialPanel={{
        component: ModelsPanel,
        title: "Modèles",
      }}
    />
  </Container>
);

const ModelsPanel = (props: any) => {
  const { actions } = useOvermind();
  const [isDisabled, setIsDisabled] = useState("");
  const [value, setValue] = useState("");
  const [modelList, setModelList] = useState<any>([]);
  const [res, setRes] = useState<any>([]);

  const CheckSameModel = async (modelTitle: string) => {
    // try {
    actions.clearData(modelTitle);
    actions.changeModel(modelTitle);
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  useEffect(() => {
    const arr = [...modelList];
    modelsTL.map((model, m) => {
      arr.push(model);
      setModelList(arr);
      setRes(modelList);
    });
  }, []);

  const SearchFunc = (index) => (
    <Model
      onClick={() => {
        // eslint-disable-next-line react/prop-types
        props.openPanel({
          component: TabsPanel,
          title: "Aspect",
        });
        CheckSameModel(index[1]);
        setIsDisabled("none");
      }}
      isDisabled={isDisabled}
    >
      {index[0]}
    </Model>
  );

  useEffect(() => {
    setRes(modelList);
    const newList: object[] = [];

    modelList.map(
      (model: { translated: string[]; title: string }, m: number) => {
        const result = model.translated.filter((mdl) =>
          mdl.toLowerCase().includes(value.toLowerCase()),
        );
        if (result[0] !== undefined) {
          newList.push([model.translated, model.title]);
        }
        setRes(newList);
      },
    );
  }, [value, modelList]);

  const ValueSetting = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Search className="bp3-input-group bp3-large">
        <span className="bp3-icon bp3-icon-search" />
        <input
          className="bp3-input"
          type="search"
          placeholder="Chercher un modèle"
          dir="auto"
          onChange={ValueSetting}
          value={value}
        />
      </Search>
      {res.map((model: object, m: number) => (
        <>{SearchFunc(model)}</>
      ))}
    </>
  );
};

const TabsPanel = () => {
  const { panelZero, panelOne } = usePanel();

  return (
    <>
      <Tabs>
        <Tab id="0" panel={panelZero} title="Données" />
        <Tab id="1" panel={panelOne} title="Thèmes" />
      </Tabs>
    </>
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

  const renderInput = (input: {
    type: string;
    name: any;
    title: string;
    icon: any;
  }) => {
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

    if (input.type === "date") {
      return (
        <Date
          formatDate={(date: { toLocaleString: () => any }) =>
            date.toLocaleString()
          }
          locale="fr"
          localeUtils={MomentLocaleUtils}
          onChange={(
            e:
              | string
              | number
              | void
              | Date
              | moment.Moment
              | React.ReactText[]
              | moment.MomentInputObject
              | undefined,
          ) => {
            actions.changeValue({
              key: input.name,
              value: moment(e).locale("fr").format("LL"),
            });
          }}
          parseDate={(str: string) => new Date(str)}
          placeholder={input.title}
          {...getMomentFormatter(input.title)}
        />
      );
    }

    if (input.type === "rangeDate") {
      return (
        <RangeDate
          allowSingleDayRange
          formatDate={(date: { toLocaleString: () => any }) =>
            date.toLocaleString()
          }
          locale="fr"
          localeUtils={MomentLocaleUtils}
          onChange={(
            e: (
              | string
              | number
              | void
              | Date
              | moment.Moment
              | React.ReactText[]
              | moment.MomentInputObject
              | undefined
            )[],
          ) => {
            actions.changeValue({
              key: input.name,
              value: [
                moment(e[0]).locale("fr").format("LL"),
                moment(e[1]).locale("fr").format("LL"),
              ],
            });
          }}
          parseDate={(str: string) => new Date(str)}
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
        onChange={(e: { target: { value: any } }) => {
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

  const genericModel = modelsB[state.model];
  const getFirstLetter = (s: string) =>
    s.split("").splice(0, 1).join().toUpperCase();
  const getRightIcon = (id: string) => (id ? "chevron-left" : "chevron-down");

  useEffect(() => {
    const groups = createCollapseGroup();
    setList(groups);
  }, []);

  const createCollapseGroup = () => {
    const modelB = modelsB[state.model];

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
  const handleClick = (id: string) => {
    const newList = { ...list };
    newList[id] = !newList[id];
    setList(newList);
  };

  const panelZero = genericModel.map(
    (type: { title: {} | null | undefined; id: string }, i: number) => (
      <CatCard key={type.title}>
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
            {genericModel[i].items.map((item: any) => (
              <Row
                key={item.name}
                isDate={item.type === "date"}
                isFullRow={item.fullRow}
              >
                {renderInput(item)}
              </Row>
            ))}
          </Grid>
        </Collapse>
      </CatCard>
    ),
  );

  const panelOne = (
    <Card>
      <ThemeDisplay>
        {themes.map(
          (theme) =>
            theme[state.model] && (
              <ThemeContainer key={theme.title}>
                <ThemeThumbnail
                  backgrounds={backgrounds}
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

const Search = styled.div`
  margin: 15px 0 0 0;
`;

const Model = styled.div`
  margin: 15px 0 0 0;
  padding: 20px;
  border: 3px #4f5d68 solid;
  border-radius: 10px;
  background-color: #34414c;
  font-size: 20px;
  cursor: pointer;
  pointer-events: ${(p: { isDisabled: string }) => p.isDisabled};
  transition: 0.3s;
  &:hover {
    background-color: #384753;
  }
  &.removed-item {
    animation: removed-item-animation 1s;
    color: red;
  }
  animation-duration: 0.35s;
  animation-name: start;
  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes removed-item-animation {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Input = styled(InputGroup)`
  margin: 5px;
  transition: 1s;
`;

const InputArea = styled(TextArea)`
  min-height: 40px;
  width: calc(100% - 10px);
  margin: 5px;
  resize: none;
`;

const Date = styled(DateInput)`
  width: calc(100% - 10px);
  margin: 5px;
`;

const RangeDate = styled(DateRangeInput)`
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
  background-image: ${(p: { title: string; backgrounds: object }) =>
    `url(${p.backgrounds[p.title]})`};
  background-repeat: no-repeat;
  border-radius: 10px;
  cursor: pointer;
  border: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "#33b0ec 5px solid" : "#222f37 5px solid"};
  pointer-events: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "none" : "all"};
  opacity: ${(p: { title: string; theme: string }) =>
    p.title === p.theme ? "1" : "0.8"};
  transition: 0.3s;
  &:hover {
    border: 5px #b7e7ff solid;
    opacity: 0.9;
  }
`;

const ThemeLogo = styled.span`
  font-size: 70px;
  font-weight: 700;
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
