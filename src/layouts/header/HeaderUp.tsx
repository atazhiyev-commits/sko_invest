import { Link } from "react-router";
import { Eye, FacebookIcon, Instagram, Menu, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../shared/ui/LanguageSwitcher";

import logo from "./../../assets/images/logo/logo.svg";
import { useLG } from "../../app/lg";

import "./header.scss";
import { useA11yStore } from "../../app/a11";

const HeaderUp = () => {
  const { t } = useTranslation();
  const lang = useLG.lang;

  const toggle = useA11yStore((s) => s.toggleA11yMode);
  const a11yMode = useA11yStore((s) => s.a11yMode);

  return (
    <div className="header__UP">
      <div className="header__search">
        <input
          className="search__input"
          type="search"
          name="search_SKO"
          id="searchSKO"
          placeholder={t("header.seacrhPlaceholder")}
        />
      </div>

      <div className="header__menu">
        <ul className="header__menu-menuList">
          <li className="item-li header-item">
            <Link to={lang + "/"} className="item_link">
              {t("header.headerMenu.howHelp")}
            </Link>
          </li>
          <li className="item-li header-item">
            <Link to={lang + "/"} className="item_link">
              {t("header.headerMenu.protectionInvest")}
            </Link>
          </li>
          <li className="item-li header-item">
            <Link to={lang + "/"} className="item_link">
              {t("header.headerMenu.contacts")}
            </Link>
          </li>
        </ul>
      </div>

      <nav className="header__nav">
        <Menu className="header__nav-burger" size={32} />
        <ul className="header__nav-socMedia">
          <li className="socItem">
            <a className="soc_link" href="https://www.facebook.com/rsk.sko/">
              <FacebookIcon className="iconMedia" size={20} />
            </a>
          </li>
          <li className="socItem">
            <a className="soc_link" href="https://www.instagram.com/sko_kz/">
              <Instagram className="iconMedia" size={20} />
            </a>
          </li>
          <li className="socItem">
            <a className="soc_link" href="https://t.me/s/skonews">
              <Send className="iconMedia" size={20} />
            </a>
          </li>
        </ul>
        <ul className="header__nav-global_setting">
          <button className="eyes" onClick={toggle}>
            <Eye size={24} />
          </button>
          <LanguageSwitcher />
        </ul>
        <div className="header__logo">
          <Link to={lang + "/"} className="header__logo-link">
            <img src={logo} alt="Logo" />
            <span>SKO</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderUp;
