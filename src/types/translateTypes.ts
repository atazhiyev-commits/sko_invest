import type { ReactNode } from "react";

export interface LayoutType {
  title: string;
  label: string;
  link: string;
  list: Array<ArrList>;
}

export interface FAQtype {
  title: string;
  link: string;
  list: Array<FAQlist>;
}

export type ArrList = {
  name: string;
  link: string;
  list: Array<List>;
};

export type List = {
  name: string;
  link: string;
};

export type FAQlist = {
  question: string;
  answer: string;
};

export interface HelperType {
  name: string;
  icon: ReactNode;
  list: Array<HelperList>;
}

export interface HelperList {
  name: string;
  info: string;
}
