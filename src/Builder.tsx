import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Collapse,
  Icon,
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
import moment from "moment";
import { thumbnails } from "./thumbnails/index";
import { useOvermind } from "./store";
import { themes } from "./themes/themesConfig";
import { modelsB, modelsTL } from "./App";

const Builder = () => (
  <Container className="bp3-dark">
    <PanelStack
      initialPanel={{
        component: ModelsPanel,
        title: "Models",
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
    modelsTL.map((model) => {
      arr.push(model);
      setModelList(arr);
      setRes(modelList);
    });
  }, []);

  const SearchFunc = (model: string | number | object, m: number) => (
    <Model
      onClick={() => {
        props.openPanel({
          component: TabsPanel,
          title: "Aspect",
        });
        CheckSameModel(model[1]);
        setIsDisabled("none");
      }}
      isDisabled={isDisabled}
    >
      {model[0]}
    </Model>
  );

  useEffect(() => {
    setRes(modelList);
    const newList: object[] = [];

    modelList.map((model: { title: string[]; id: string }) => {
      const result = model.title.filter((mdl) =>
        mdl.toLowerCase().includes(value.toLowerCase()),
      );
      if (result[0] !== undefined) {
        newList.push([model.title, model.id]);
      }
      setRes(newList);
    });
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
          placeholder="Search for a model"
          dir="auto"
          onChange={ValueSetting}
          value={value}
        />
      </Search>
      {res.map((model: object, m: number) => (
        <div key={model[0]}>{SearchFunc(model, m)}</div>
      ))}
      <Metadata style={{ paddingTop: "20px" }}>
        <Card>
          <Submeta>
            <SubmetaIcon icon="issue" iconSize={18} />
            <h3>Disclaimer</h3>
          </Submeta>
          <p>
            We are not responsible for any of the results originating from this
            free, public service. All user-generated content is not within our
            responsibility. Any offensive/illegal end met through content
            created by users remains entirely part of aforementioned users'
            responsibility.
          </p>
          <Submeta>
            <SubmetaIcon icon="git-repo" iconSize={18} />
            <h3>Github repository</h3>
          </Submeta>
          Papofic is an open-source service and can be found
          <a href="https://github.com/angelinopersia/papofic"> on github.</a>
        </Card>
      </Metadata>
    </>
  );
};

const TabsPanel = () => {
  const { panelZero, panelOne } = usePanel();

  return (
    <>
      <Tabs>
        <Tab id="0" panel={panelZero} title="Data structure" />
        <Tab id="1" panel={panelOne} title="Theme selection" />
      </Tabs>
      <Metadata>
        <Card>
          <Submeta>
            <SubmetaIcon icon="issue" iconSize={18} />
            <h3>Disclaimer</h3>
          </Submeta>
          <p>
            We are not responsible for any of the results originating from this
            free, public service. All user-generated content is not within our
            responsibility. Any offensive/illegal end met through content
            created by users remains entirely part of aforementioned users'
            responsibility.
          </p>
          <Submeta>
            <SubmetaIcon icon="git-repo" iconSize={18} />
            <h3>Github repository</h3>
          </Submeta>
          Papofic is an open-source service and can be found
          <a href="https://github.com/angelinopersia/papofic"> on github.</a>
        </Card>
      </Metadata>
    </>
  );
};

const useInput = () => {
  const { actions } = useOvermind();

  // DATE FORMATTING FUNCTION
  const getMomentFormatter = (format: string): IDateFormatProps => ({
    formatDate: (date, locale = "us") =>
      moment(date).locale(locale).format("LL"),
    parseDate: (str, locale = "us") =>
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
          locale="us"
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
              value: moment(e).locale("us").format("LL"),
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
          locale="us"
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
                moment(e[0]).locale("us").format("LL"),
                moment(e[1]).locale("us").format("LL"),
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
    (type: { title: {}; id: string }, i: number) => (
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
    <Card style={{ marginBottom: "20px" }}>
      <ThemeDisplay>
        {themes.map((theme) => (
          <ThemeContainer key={theme.title}>
            <ThemeThumbnail
              thumbnails={thumbnails}
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

            <ThemeTitle>{theme.title} theme</ThemeTitle>
          </ThemeContainer>
        ))}
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

const Metadata = styled.div`
  opacity: 0.3;
  transition: 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const Submeta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 15px;
`;

const SubmetaIcon = styled(Icon)`
  padding-right: 10px;
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
  margin-left: 5px;
`;

const RangeDate = styled(DateRangeInput)`
  margin-left: 5px;
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
  background-image: ${(p: { title: string; thumbnails: object }) =>
    `url(${p.thumbnails[p.title]})`};
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
