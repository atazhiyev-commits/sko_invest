import { type FC, type ReactNode } from "react";
import clsx from "clsx";

import "./container.scss";

interface props {
  children: ReactNode;
  className?: string;
}

const Container: FC<props> = ({ children, className }) => {
  return <div className={clsx("container", className)}>{children}</div>;
};

export default Container;
