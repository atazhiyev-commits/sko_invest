import type { ReactNode } from "react";
import clsx from "clsx";

import "./blockHelper.scss";

interface BlockHelperProps {
  name: string;
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

const BlockHelper: React.FC<BlockHelperProps> = ({ name, icon, onClick, className }) => {
  return (
    <button className={clsx("blockHelper", className)} onClick={onClick}>
      <div className="blockHelper__item">
        <div className="blockIcon">{icon}</div>
        <p className="blockText">{name}</p>
      </div>
    </button>
  );
};

export default BlockHelper;
