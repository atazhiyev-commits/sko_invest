import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

import Container from "@/components/container/Container";

import "./defense.scss";

interface DefenseProps {
  className?: string;
}

const Defense: React.FC<DefenseProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={clsx("defense", className)} id="defense">
      <Container>
        <header className="defense__header">
          <h2 className="title-section">{t("defense.title")}</h2>
          <Link to={"defense"} className="btn-section">
            {t("defense.button")}
          </Link>
        </header>
        <div className="defense__content">text</div>
      </Container>
    </section>
  );
};

export default Defense;
