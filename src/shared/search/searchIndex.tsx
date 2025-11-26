import type { LayoutType } from "@/types/translateTypes";
import { useTranslation } from "react-i18next";

export const useSearchIndex = () => {
  const { t } = useTranslation();
  const newsIndex = t("news", { returnObjects: true }) as LayoutType;
  const helpersIndex = t("helpers", { returnObjects: true }) as LayoutType;
  const defenseIndex = t("defense", { returnObjects: true }) as LayoutType;

  const SearchIndex = [
    {
      title: "Новости",
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
  ];

  return SearchIndex;
};
