import { IconName } from "@blueprintjs/core";

export type BuilderType = {
  title: string;
  id: string;
  items: Items[];
};

type Items = {
  title: string;
  name: string;
  icon: IconName;
  fullRow?: boolean;
  type?: "date" | "rangeDate" | "textArea";
};
