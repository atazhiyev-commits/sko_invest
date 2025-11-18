import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Container from "../../components/container/Container";

import "./faq.scss";
import { faqTest } from "./faq_test";

interface faqProps {
  className?: string;
}

const FAQ: React.FC<faqProps> = ({ className }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className={clsx("faq", className)}>
      <Container>
        <h2 className="title-section">FAQ</h2>
        <div className="faq__content">
          {faqTest.map(
            (item: { question: string; answer: string }, index: number) => (
              <Accordion
                key={index}
                className="accordion"
                expanded={expanded === "panel1" + index}
                onChange={handleChange("panel1" + index)}
              >
                <AccordionSummary
                  className="accordionSummary"
                  expandIcon={<ChevronDown />}
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
