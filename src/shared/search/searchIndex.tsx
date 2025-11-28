import type { FAQtype, LayoutType } from "@/types/translateTypes";
import { useTranslation } from "react-i18next";

export const useSearchIndex = () => {
  const { t } = useTranslation();
  const newsIndex = t("news", { returnObjects: true }) as LayoutType;
  const helpersIndex = t("helpers", { returnObjects: true }) as LayoutType;
  const defenseIndex = t("defense", { returnObjects: true }) as LayoutType;
  const heroIndex = t("hero", { returnObjects: true }) as LayoutType;
  const faqIndex = t("faq", { returnObjects: true }) as FAQtype;

  const SearchIndex = [
    {
      title: newsIndex?.title,
      link: newsIndex?.link,
      list: newsIndex?.list,
    },
    {
      title: helpersIndex.title,
      link: helpersIndex?.link,
      list: helpersIndex.list,
    },
    {
      title: defenseIndex.title,
      link: defenseIndex?.link,
      list: defenseIndex?.list,
    },
    {
      title: heroIndex.title,
      link: heroIndex?.link,
      list: heroIndex?.list,
    },
    {
      title: faqIndex.title,
      link: faqIndex?.link,
      list: faqIndex?.list,
    },
  ];

  return SearchIndex;
};
