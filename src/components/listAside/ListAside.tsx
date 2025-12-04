import { type FC } from "react";
import ButtonAside from "../asideBtn";
import type { LayoutType } from "@/types/translateTypes";

interface Props {
  className?: string;
  children: React.ReactNode;
  list?: Array<LayoutType>;
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
