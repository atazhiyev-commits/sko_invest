import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { listHeader } from "./list";

import "./header.scss";

const HeaderDown = () => {
  const { t } = useTranslation();

  const listBottom = t("header.investGuide.headerBottom", {
    returnObjects: true,
  });

  return (
    <div className="header__bottom">
      {listHeader.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link to={"/"}>
            {item.label} <ChevronDown className="chevronDown" size={18} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderDown;
