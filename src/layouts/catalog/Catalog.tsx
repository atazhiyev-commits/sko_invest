import { useState, type FC } from "react";
import clsx from "clsx";
import Container from "../../components/container/Container";
import ButtonAside from "../../components/asideBtn";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./catalog.scss";
import type { headerList } from "../header/HeaderDown";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

interface Props {
  pageName?: string;
  className?: string;
}

const Catalog: FC<Props> = ({ pageName, className }) => {
  const { t } = useTranslation();
  

  const nameBottom = t("header.headerBottom", {
    returnObjects: true,
  }) as Array<headerList>;

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
             <ButtonAside key={index} name={item.label} />
            ))}
          </aside>
          <div className="catalog__content-info">
            <div className="content">
              <h2>Регистрация бизнеса</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
