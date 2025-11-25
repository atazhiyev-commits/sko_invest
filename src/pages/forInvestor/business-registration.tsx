import clsx from "clsx";
import { type FC } from "react";

interface Props {
  className?: string;
}

const BusinessRegistration: FC<Props> = ({  className }) => {
  return (
    <>
      <h2 className={clsx("BusinessRegistration", className)}>
        Регистрация и бизнес
      </h2>
    </>
  );
};

export default BusinessRegistration;
