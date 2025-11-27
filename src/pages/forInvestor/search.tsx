import type { FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { useSearchIndex } from "@/shared/search/searchIndex";
import type { LayoutType } from "@/types/translateTypes";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const searchParams = useLocation().search.split("=")[1];
  const decoded = decodeURIComponent(searchParams);

  const resIndex = useSearchIndex();

  const titleSection = resIndex.map((item: any, index: number) => item.title);
  const filteredSection = titleSection.filter((item: any, index: number) => item.includes(decoded));
  console.log(titleSection);

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section">Результаты: </h2>
      <p>Поиск слово: {decoded}</p>
      <div className="blockresult">
        <p>{filteredSection ? filteredSection : "Ничего не найдено"}</p>
      </div>
    </section>
  );
};

export default SearchCatalog;
