export interface LayoutType {
  title: string;
  link: string;
  list: Array<list>;
}

type list = {
  name: string;
  link: string;
  list: Array<list>;
};
