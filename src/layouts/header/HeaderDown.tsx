import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import DropDown from "../../components/dropdown";

import { listHeader } from "./list";

import "./header.scss";
import { useLG } from "../../app/lg";

export type headerList = {
  label: string;
  name: string;
  link: string;
  list: any;
};

const HeaderDown = () => {
  const { t } = useTranslation();

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  const lang = useLG.lang;

  return (
    <div className="header__bottom">
      {nameBottom.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link to={lang + "/catalog" + item.link} className="link">
            {item.label}
            <ChevronDown className="chevronDown" size={18} />
          </Link>

          {item.list.length > 0 && (
            <DropDown list={item.list} className="dropdown" />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderDown;
