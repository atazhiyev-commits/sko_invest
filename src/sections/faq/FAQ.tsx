import clsx from "clsx";
import { useTranslation } from "react-i18next";
import type { FAQlist } from "@/types/translateTypes";

import AccordionFAQ from "@/components/Accordion/AccordionFAQ";
import Container from "@/components/container/Container";

import "./faq.scss";

interface faqSectionProps {
  className?: string;
}

const FAQ: React.FC<faqSectionProps> = ({ className }) => {
  const { t } = useTranslation();
  const res = t("faq.list", { returnObjects: true }) as Array<FAQlist>;
  const max = 3;

  return (
    <section className={clsx("faq", className)}>
      <Container>
        <h2 className="title-section">{t("faq.title")}</h2>
        <div className="faq__content">
          {res.map(
            (item, index: number) =>
              index < max && (
                <AccordionFAQ
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              )
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
