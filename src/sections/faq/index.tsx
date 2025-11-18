import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Container from "../../components/container/Container";

import "./faq.scss";

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
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary expandIcon={<ChevronDown />}>
              <Typography>
                Что представляет собой инвестиционный доход для получения?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Инвестор зарабатывает на... (твой текст)</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary expandIcon={<ChevronDown />}>
              <Typography>Question</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ответ на вопрос...</Typography>
            </AccordionDetails>
          </Accordion>
                    <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary expandIcon={<ChevronDown />}>
              <Typography>Question</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Ответ на вопрос...</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
