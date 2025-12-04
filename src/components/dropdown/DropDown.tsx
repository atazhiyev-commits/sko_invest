import { type FC } from "react";
import { Link } from "react-router";
import clsx from "clsx";
import type { List } from "@/types/translateTypes";

import "./dropDown.scss";

interface Props {
  list: any;
  nameDrop?: string;
  basePath: string;
  children?: React.ReactNode;
  className?: string;
}

const DropDown: FC<Props> = ({ list, basePath, children, className }) => {
  return (
    <div className={clsx("dropDown", className)}>
      <div className="dropDown__content">
        {list.map((item: List, index: number) => (
          <Link
            to={basePath + item?.link}
            key={index}
            state={{ name: item.name }}
            className="dropDown__content-name"
          >
            {item.name}
          </Link>
        ))}
        {children}
      </div>
    </div>
  );
};

export default DropDown;
