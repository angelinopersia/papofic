import React from "react";
import styled from "styled-components";
import { BuilderType } from "../types/index";

export const TestTL = { title: "test", translated: "Test" };

export const TestB: BuilderType[] = [
  {
    title: "Test 1",
    id: "test1",
    items: [
      { title: "test1", name: "sFirstName", icon: "person" },
      { title: "test2", name: "test2", icon: "person" },
    ],
  },
  {
    title: "Test 2",
    id: "test2",
    items: [
      {
        title: "test 2",
        name: "test 2",
        icon: "map-marker",
      },
      {
        title: "test2",
        name: "test2",
        icon: "calendar",
      },
      { title: "test2", name: "test2", icon: "edit", fullRow: true },
    ],
  },
];

export const TestV = ({ test }: any) => <div>test</div>;

const Div = styled.div`
  ${(p: any) => p.theme}
`;
