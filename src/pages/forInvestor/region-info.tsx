import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const RegionInfo: FC<Props> = ({ children, className }) => {
  return (
    <>
      <h2 className={clsx("RegionInfo", className)}>RegionInfo</h2>
      {children}
    </>
  );
};

export default RegionInfo;
