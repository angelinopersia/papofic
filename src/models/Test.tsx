import React from "react";
import styled from "styled-components";

type TestVType = {
  test: string;
};

const test1 = {
  title: "Test 1",
  id: "test1",
  items: [
    { title: "test1", name: "test1", icon: "person" },
    { title: "test2", name: "test2", icon: "person" },
  ],
};
const test2 = {
  title: "Test 2",
  id: "test2",
  items: [
    {
      title: "test2",
      name: "test2",
      icon: "map-marker",
    },
    {
      title: "test2",
      name: "test2",
      icon: "calendar",
    },
    { title: "test2", name: "test2", icon: "edit", fullRow: true },
  ],
};

export const TestB = [test1, test2];

export const TestV = ({ test }: any) => <div>test</div>;

const Div = styled.div`
  ${(p: any) => p.theme}
`;
