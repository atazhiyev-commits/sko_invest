import type { FC } from "react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import Container from "@/components/container/Container";

import { Facebook, Instagram, Send } from "lucide-react";
import logo from "@/assets/images/logo/logo.svg";
import gerb from "@/assets/images/logo/gerb.svg";
import { lang } from "@/shared/store/lg";
import SocMedia from "@/sections/socMedia";

interface Props {
  className?: string;
}

const FooterTop: FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer className={clsx("footer", className)} id="contact">
      <Container>
        <div className="footer__inner">
          <div className="footer__icons">
            <div className="iconGlav">
              <div className="gerb">
                <Link to={"https://primeminister.kz/"}>
                  <img src={gerb} alt="Герб" />
                </Link>
              </div>
              <div className="logo">
                <Link to={lang + "/"}>
                  <img src={logo} alt="Логотип" />
                </Link>
              </div>
            </div>

            <SocMedia />
          </div>

          <div className="footer__menu">
            <h2 className="title-footer">{t("footer.forInvestors")}</h2>
            <nav className="footer__menu-list">
              <li className="menu-item">
                <Link to={lang + "/catalog/investor-guide"}>
                  {t("footer.listInvestor.guide")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/catalog/investment-opportunities"}>
                  {t("footer.listInvestor.opportunities")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/catalog/regulatory-acts"}>
                  {t("footer.listInvestor.regulations")}
                </Link>
              </li>
              <li className="menu-item">
                <Link to={lang + "/catalog/about-region"}>
                  {t("footer.listInvestor.aboutRegion")}
                </Link>
              </li>
            </nav>
          </div>

          <div className="footer__navigation">
            <h2 className="title-footer">{t("footer.navigate")}</h2>
            <nav className="footer__navigation-list">
              <ul className="footer__navigation-list">
                <li className="item-list">
                  <Link to={lang + "/news"} className="item_link">
                    {t("footer.listNavigate.news")}
                  </Link>
                </li>
                <li className="item-list">
                  <HashLink to={lang + "/#helpers"} className="item_link">
                    {t("header.headerMenu.howHelp")}
                  </HashLink>
                </li>
                <li className="item-list">
                  <HashLink to={lang + "/#defense"} className="item_link">
                    {t("header.headerMenu.protectionInvest")}
                  </HashLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer__contact">
            <h2 className="title-footer">{t("footer.contacts")}</h2>
            <div className="contacts">
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.phone")}:{" "}
                </h3>
                <p className="number">+7 777 123 1234</p>
              </div>
              <div className="phone">
                <h3 className="phone-title">
                  {t("footer.contactItems.homephone")}:{" "}
                </h3>
                <p className="number">+7 7152 123 123</p>
              </div>
              <div className="email">
                <h3 className="phone-title">
                  {t("footer.contactItems.email")}
                </h3>
                <p className="mail">test@mailgov.kz</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterTop;
