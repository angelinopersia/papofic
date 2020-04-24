import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import styled from "styled-components";
import { Button, Icon, Intent, Position, Tooltip } from "@blueprintjs/core";
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
  const componentRef: any = useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <div className="bp3-dark">
            <HoverText content="Imprimer le document" position={Position.TOP}>
              <Print>
                <PrintContent>
                  <Icon
                    icon="print"
                    iconSize={Icon.SIZE_LARGE}
                    intent={Intent.NONE}
                  />
                </PrintContent>
              </Print>
            </HoverText>
          </div>
        )}
        content={() => componentRef.current}
      />

      <File>
        <div ref={componentRef}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <GenericModel {...state.data} />
        </div>
      </File>
    </>
  );
};

const File = styled.div`
  margin: 50px;
  width: 794px;
  height: 1123px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  background-color: white;
  overflow: hidden;
  position: relative;
`;

const Print = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 60px;
  height: 50px;
  width: 50px;
  color: white;
  background-color: #30404d;
  border-radius: 50%;
  outline: none;
`;

const PrintContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const HoverText = styled(Tooltip)`
  position: fixed;
  bottom: 95px;
  right: 85px;
`;

export default View;
