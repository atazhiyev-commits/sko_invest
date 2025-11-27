export interface LayoutType {
  title: string;
  label: string;
  link: string;
  list: any;
}

type list = {
  name: string;
  link: string;
  list: Array<list>;
};
