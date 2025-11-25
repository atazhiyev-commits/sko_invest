import { Link } from "react-router";
import { Eye, FacebookIcon, Instagram, Menu, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../shared/ui/LanguageSwitcher";
import { useLG } from "../../app/lg";

import logo from "./../../assets/images/logo/logo.svg";
import { useA11yStore } from "../../app/a11";

import "./header.scss";
import SideMenu from "../../components/sideMenu";
import { useState } from "react";
import HeaderMenu from "./HeaderTop/HeaderMenu";

const HeaderUp = () => {
  const [toggled, setToggled] = useState(false);
  const { t } = useTranslation();
  const lang = useLG.lang;

  const toggle = useA11yStore((s: any) => s.toggleA11yMode);

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

      <HeaderMenu link={lang} />

      <nav className="header__nav">
        <button
          className="header__nav-burgerMenu"
          onClick={() => setToggled(!toggled)}
        >
          <Menu className="burger" size={32} />
        </button>

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

      <SideMenu toggled={toggled} setToggled={setToggled} />
    </div>
  );
};

export default HeaderUp;
