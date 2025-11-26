import Banks from "./banks";
import BusinessRegistration from "./business-registration";
import Hotels from "./hotels";

import AboutTheRegion from "./About the region";
import InvestorGuide from "./Investor guide";
import InvestmentOpportunities from "./Investment opportunities";
import RegulatoryLegalActs from "./Regulatory legal acts";
import LandPlot from "./LandPlot";
import Anylink from "./Anylink";
import SearchCatalog from "./search";

import "./forinvestor.scss";

export const CatalogContent = [
  { link: "banks", element: Banks },
  {
    link: "hotels",
    element: Hotels,
  },
  {
    link: "business-registration",
    element: BusinessRegistration,
  },
  {
    link: "about-region",
    element: AboutTheRegion,
  },
  {
    link: "investor-guide",
    element: InvestorGuide,
  },
  {
    link: "investment-opportunities",
    element: InvestmentOpportunities,
  },
  {
    link: "regulatory-acts",
    element: RegulatoryLegalActs,
  },
  {
    link: "land-plots",
    element: LandPlot,
  },
  {
    link: "search",
    element: SearchCatalog,
  },
  {
    link: "",
    element: Anylink,
  },
];
