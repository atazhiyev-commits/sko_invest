import { useState, type FC } from "react";
import clsx from "clsx";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import type { FAQlist } from "@/types/translateTypes";

import { ChevronDown } from "lucide-react";

interface FAQProps extends FAQlist {
  className?: string;
}

const AccordionFAQ: FC<FAQProps> = ({ question, answer, className }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      style={{ border: "none", boxShadow: "none" }}
      className={clsx("accordion", className)}
      expanded={expanded === question}
      onChange={handleChange(question)}
    >
      <AccordionSummary
        className="accordionSummary"
        expandIcon={<ChevronDown />}
      >
        <Typography className="question">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="answer">
          <strong>{answer}</strong>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionFAQ;
