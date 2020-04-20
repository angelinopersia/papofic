import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useOvermind } from "./store";
import { CancelV } from "./models/Cancel";
import { TestV } from "./models/Test";

const models = {
  cancel: CancelV,
  test: TestV,
};

const View = (ref: any) => {
  const { state } = useOvermind();
  const GenericModel = models[state.model];
  console.log(ref);
  // eslint-disable-next-line react/jsx-props-no-spreading
  // return <GenericModel {...state.data} />;
  return (
    <table>
      <thead>
        <th>column 1</th>
        <th>column 2</th>
        <th>column 3</th>
      </thead>
      <tbody>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
        <tr>
          <td>data 1</td>
          <td>data 2</td>
          <td>data 3</td>
        </tr>
      </tbody>
    </table>
  );
};

const Example = () => {
  const componentRef: any = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <View ref={componentRef} />
    </div>
  );
};

export default Example;

// export default View;
