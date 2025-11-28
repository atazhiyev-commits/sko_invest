export interface LayoutType {
  title: string;
  label: string;
  link: string;
  list: Array<list>;
}

export interface FAQtype {
  title: string;
  link: string;
  list: Array<FAQlist>;
}

type list = {
  name: string;
  link: string;
  list: Array<list>;
};

type FAQlist = {
  question: string;
  answer: string;
};
