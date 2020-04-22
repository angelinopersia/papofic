import React from "react";
import styled from "styled-components";

type TestVType = {
  test: string;
};

export const TestB = [{ title: "Test", name: "test" }];

export const TestV = ({ test }: any) => <div>test</div>;

const Div = styled.div`
  ${(p: any) => p.theme}
`;
