import { type FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import type { headerList } from "@/layouts/header/HeaderDown";
import Container from "@/components/container/Container";
import ButtonAside from "@/components/asideBtn";
import { CatalogContent } from "@/pages/forInvestor/list";
import Anylink from "@/pages/forInvestor/Anylink";

import "./catalog.scss";

interface Props {
  pageName?: string;
  label: string;
  link: string;
  className?: string;
}

const Catalog: FC<Props> = ({ pageName, className }) => {
  const { t } = useTranslation();
  const location = useLocation().pathname;
  const lastPart = location
    .split("/")
    .filter((segment) => segment.length > 0)
    .pop();

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  const seacrh = t("header.search", {
    returnObjects: true,
  }) as { label: string; link: string };

  const reuslt = CatalogContent.find((item) => item.link === lastPart);

  const Component: any = reuslt ? reuslt.element : Anylink;

  return (
    <section className={clsx("catalog", className)}>
      <div className="catalog__head">
        <Container className="catalog__head-container">
          <div className="breadcrumb">
            <p>Breadcrumb {">"} page</p>
          </div>
          <h2 className="title-section catalog__head-title">{pageName}</h2>
        </Container>
      </div>

      <Container>
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
