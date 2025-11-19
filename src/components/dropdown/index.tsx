import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router";

interface Props {
  nameDrop: string;
  children: React.ReactNode;
  className?: string;
}

const Index: FC<Props> = ({ nameDrop, children, className }) => {
  return (
    <div className={clsx("dropDown", className)}>
      <Link to={"/"}>
        {nameDrop} <ChevronDown className="chevronDown" size={18} />
      </Link>
      {children}
    </div>
  );
};

export default Index;
