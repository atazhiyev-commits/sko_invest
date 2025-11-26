import { useState } from "react";
import { Link } from "react-router";
import { Eye, FacebookIcon, Instagram, Menu, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useA11yStore } from "@/app/a11";
import { useLG } from "@/app/lg";
import LanguageSwitcher from "@/shared/ui/LanguageSwitcher";
import HeaderMenu from "./HeaderTop/HeaderMenu";
import SideMenu from "@/components/sideMenu";

import logo from "@/assets/images/logo/logo.svg";

import "./header.scss";
import { BASE_URL } from "@/shared/store/env";

const HeaderUp = () => {
  const [toggled, setToggled] = useState(false);
  const { t } = useTranslation();
  const lang = useLG.lang;

  const toggle = useA11yStore((s: any) => s.toggleA11yMode);

  return (
    <div className="header__UP">
      <div className="header__search">
        <form action={BASE_URL + lang + "/catalog/search"} className="form">
          <input
            className="search__input"
            type="search"
            name="q"
            id="searchSKO"
            placeholder={t("header.seacrhPlaceholder")}
          />
        </form>
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
