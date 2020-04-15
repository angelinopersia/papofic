import React from "react";
import { useOvermind } from "./store";

import { CancelV } from "./models/Cancel";
import { TestV } from "./models/Test";

const models = {
  cancel: CancelV,
  test: TestV,
};

const View = () => {
  const { state } = useOvermind();
  const GenericModel = models[state.model];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <GenericModel {...state.data} />;
};

export default View;
