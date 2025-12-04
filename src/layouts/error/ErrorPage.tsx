import clsx from "clsx";
import { useTranslation } from "react-i18next";

import Container from "@/components/container/Container";

import { CircleOff } from "lucide-react";

import "./errorPage.scss";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx("errorPage")}>
      <Container>
        <h2 className="title-section">
          4<CircleOff />4
        </h2>
        <p className="desc">{t("NotFound")}</p>
      </Container>
    </section>
  );
};

export default ErrorPage;
