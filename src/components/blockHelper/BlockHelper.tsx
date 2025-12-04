import clsx from "clsx";
import type { HelperType } from "@/types/translateTypes";

import "./blockHelper.scss";

interface BlockHelperProps extends HelperType {
  onClick: () => void;
  className?: string;
}

const BlockHelper: React.FC<BlockHelperProps> = ({
  name,
  icon,
  onClick,
  className,
}) => {
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
