import { type FC } from "react";
import type { headerList } from "../../layouts/header/HeaderDown";
import ButtonAside from "../asideBtn";

interface Props {
  className?: string;
  children: React.ReactNode;
  list?: Array<headerList>;
}

const ListAside: FC<Props> = ({ list, children, className }) => {
  return (
    <>
      {list?.map((item, index) => (
        <ButtonAside
          key={index}
          name={item.label}
          activeLink={item.link}
          className={className}
        />
      ))}
      {children}
    </>
  );
};

export default ListAside;
