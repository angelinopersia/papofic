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
  const componentRef: any = useRef();
  const GenericModel = models[state.model];

  return (
    <>
      <File>
        <div ref={componentRef}>
          <GenericModel {...state.data} />
        </div>
      </File>

      <ReactToPrint
        trigger={() => (
          <PrintBlock className="bp3-dark">
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
          </PrintBlock>
        )}
        content={() => componentRef.current}
      />
    </>
  );
};

const File = styled.div`
  margin: 50px;
  width: 794px;
  background-color: white;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  & > div {
    position: relative;
    height: 1123px;
    max-height: 1123px;
    overflow: hidden;
  }
`;

const Print = styled(Button)`
  height: 50px;
  width: 50px;
  bottom: 50px;
  right: 60px;
  background-color: #30404d;
  border-radius: 50%;
  color: white;
  outline: none;
`;

const PrintContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
`;

const PrintBlock = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 9000;
`;

const HoverText = styled(Tooltip)`
  bottom: 95px;
  right: 85px;
`;

export default View;
