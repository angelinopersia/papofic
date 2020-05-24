import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import styled from "styled-components";
import { Button, Icon, Intent } from "@blueprintjs/core";
import { useOvermind } from "./store";
import { modelsV } from "./models";

const View = () => {
  const { state } = useOvermind();
  const componentRef: any = useRef();
  const GenericModel = modelsV[state.model];

  return (
    <>
      {state.model !== "" && (
        <>
          <Page>
            <div ref={componentRef}>
              <File>
                <GenericModel {...state.data} />
              </File>
            </div>
          </Page>

          <ReactToPrint
            trigger={() => (
              <PrintBlock className="bp3-dark">
                <Print>
                  <PrintContent>
                    <Icon
                      icon="print"
                      iconSize={Icon.SIZE_LARGE}
                      intent={Intent.NONE}
                    />
                  </PrintContent>
                </Print>
              </PrintBlock>
            )}
            content={() => componentRef.current}
          />
        </>
      )}
    </>
  );
};

const Page = styled.div`
  margin: 50px;
  width: 794px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;

const File = styled.div`
  width: 794px;
  background-color: white;
 
    position: relative;
    min-height: 1123px;
    overflow: hidden;
  }
  animation-duration: 1s;
  animation-name: start;
  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  animation-duration: 1s;
  animation-name: start;
  @keyframes start {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default View;
