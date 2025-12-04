import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Container from "@/components/container/Container";
import ButtonAside from "@/components/asideBtn";
import { CatalogContent } from "@/pages/forInvestor/list";
import Anylink from "@/pages/forInvestor/Anylink";
import type { LayoutType } from "@/types/translateTypes";

import { MoveLeft } from "lucide-react";

import "./catalog.scss";

const Catalog = () => {
  const { t } = useTranslation();
  const location = useLocation().pathname;
  const { state } = useLocation();

  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<LayoutType>;

  const seacrh = t("header.search", {
    returnObjects: true,
  }) as { label: string; link: string };

  const reuslt = CatalogContent.find((item) => item.link === lastPart);
  const Component: any = reuslt ? reuslt.element : Anylink;

  return (
    <section className={clsx("catalog")}>
      <div className="catalog__head">
        <Container className="catalog__head-container">
          <h2 className="title-section catalog__head-title">
            {state?.name || lastPart === "search" ? "Поиск" : "Каталог"}
          </h2>
        </Container>
      </div>

      <Container>
        <Link to={"/"} className="breadcrumb">
          <MoveLeft className="move-left" /> {t("header.goto")}
        </Link>
        <div className="catalog__content">
          <aside className="catalog__content-aside">
            {nameBottom.map((item, index) => (
              <ButtonAside
                key={index}
                name={item.label}
                activeLink={item.link}
                list={item.list}
              />
            ))}
            <ButtonAside
              name={seacrh.label}
              activeLink={seacrh.link}
              list={[]}
              className="catalog__content-aside-anylink"
            />
          </aside>
          <div className="catalog__content-info">
            <div className="content">{<Component />}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
