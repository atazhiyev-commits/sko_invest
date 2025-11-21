import { useState, type FC } from "react";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown } from "lucide-react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import "./buttonAside.scss";

interface Props {
  name: string;
  activeLink: string;
  children?: React.ReactNode;
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, activeLink, className }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const lastSegment = location.split("/").filter(Boolean).at(-1);



  return (
    <Link
      to={location + activeLink}
      onClick={(e) => {
        if (lastSegment) {
          e.preventDefault();
          navigate(0);
        }
      }}
      className={clsx("buttonAside", className)}
    >
      <span className="buttonAside__name">
        {name} <ChevronDown size={16} className="chevron" />
      </span>
    </Link>
  );
};

export default ButtonAside;
