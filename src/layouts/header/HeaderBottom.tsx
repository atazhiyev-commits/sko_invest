import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import DropDown from "@/components/dropdown";
import { lang } from "@/shared/store/lg";
import type { LayoutType } from "@/types/translateTypes";

import "./header.scss";

const HeaderBottom = () => {
  const { t } = useTranslation();

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<LayoutType>;

  return (
    <div className="header__bottom">
      {nameBottom.map((item, index) => (
        <div key={index} className="header__bottom-item_link header-item">
          <Link
            to={lang + "/catalog" + item.link}
            state={{ name: item.label }}
            className="link"
          >
            {item.label}
            <ChevronDown className="chevronDown" size={18} />
          </Link>

          {item.list.length > 0 && (
            <DropDown
              list={item.list}
              basePath={lang + "/catalog" + item.link}
              className="dropdown"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderBottom;
