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

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section">Результаты: </h2>
      <p>Поиск слово: {decoded}</p>
      <div className="blockresult">
        {/* {resIndex.filter((item: LayoutType, index: number) =>
          item.list
            .includes(decoded)
            .map((item, index) => <p key={index}>{item}</p>)
        )} */}

      </div>
    </section>
  );
};

export default SearchCatalog;
