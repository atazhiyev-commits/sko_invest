import { type FC } from "react";
import { Link } from "react-router";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import { useLG } from "../../app/lg";

import type { headerList } from "../../layouts/header/HeaderDown";

import "./sidemenu.scss";
import { X } from "lucide-react";

interface Props {
  className?: string;
  toggled?: boolean;
  setToggled?: any;
  children?: React.ReactNode;
}

const SideMenu: FC<Props> = ({ toggled, setToggled, children, className }) => {
  const { t } = useTranslation();
  const lang = useLG.lang;
  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  return (
    <section
      className={clsx("sideMenu", className)}
      style={{
        direction: "rtl",
      }}
    >
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        rtl
        className="sidebar"
        backgroundColor="#fff"
        collapsedWidth="350px"
        collapsed
      >
        <Menu className="menu">
          <button className="menu__close" onClick={() => setToggled(false)}>
            <X />
          </button>
          <MenuItem
            component={<HashLink to={lang + "/#helpers"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.howHelp")}
          </MenuItem>
          <MenuItem
            component={<HashLink to={lang + "/#defense"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.protectionInvest")}
          </MenuItem>
          <MenuItem
            component={<HashLink to={lang + "/#contact"} />}
            className="menu-item"
            onClick={() => setToggled(false)}
          >
            {t("header.headerMenu.contacts")}
          </MenuItem>
          {nameBottom.map((item, index) => (
            <MenuItem
              key={index}
              component={<Link to={lang + "/catalog" + item.link} />}
              className="menu-item"
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
      {children}
    </section>
  );
};

export default SideMenu;
