import { useState, type FC } from "react";
import clsx from "clsx";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./buttonAside.scss";

interface Props {
  name: string;
  activeLink?: string;
  children?: React.ReactNode;
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, activeLink, className }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion
      className="accordion"
      expanded={expanded === activeLink}
      onChange={handleChange(activeLink)}
    >
      <AccordionSummary
        className="accordionSummary"
        expandIcon={<ChevronDown />}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {item.list?.map((path: string, key: number) => (
            <ButtonAside key={key} name={path.name} />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ButtonAside;

// <Link to={":lang/catalog/"} className={clsx("buttonAside", className)}>
//   <span className="buttonAside__name">
//     {name} <ChevronDown size={16} className="chevron" />
//   </span>
// </Link>
