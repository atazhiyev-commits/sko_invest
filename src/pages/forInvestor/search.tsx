import { Fragment, type FC } from "react";
import clsx from "clsx";
import { useLocation } from "react-router";
import { useSearchIndex } from "@/shared/search/searchIndex";
import type { LayoutType } from "@/types/translateTypes";
import { useLang } from "@/shared/store/language";
import { HashLink } from "react-router-hash-link";

import "./Seacrh.scss";

interface Props {
  className?: string;
}

const SearchCatalog: FC<Props> = ({ className }) => {
  const resIndex = useSearchIndex();
  const searchParams = useLocation().search.split("=")[1];
  const decoded = decodeURIComponent(searchParams).toLowerCase();

  const res = resIndex
    .map((section) => {
      const titleMatch = section.title.toLowerCase().includes(decoded);

      // Фильтруем элементы list
      const filteredList =
        section.list &&
        section.list.filter((item) =>
          Object.values(item)
            .filter((v) => typeof v === "string")
            .some((v) => v.toLowerCase().includes(decoded))
        );

      // Если нет совпадений ни в title, ни в list → пропускаем
      if (!titleMatch && filteredList) return null;

      // Если совпало в title → показываем всю секцию
      return {
        title: section.title,
        link: section.link,
        list: titleMatch ? section.list : filteredList,
      };
    })
    .filter(Boolean);

  console.log(res);

  return (
    <section className={clsx("searchCatalog", className)}>
      <h2 className="title-section searchCatalog__title">Результаты: </h2>
      <div className="blockresult">
        {res.map((section: any, index: number) => (
          <Fragment key={index}>
            <HashLink
              to={`/${useLang.lang}${section.link}`}
              className="resultText section-title"
            >
              {section.title}
            </HashLink>

            {section.list &&
              section.list.map((item: any, subIndex: number) => (
                <HashLink
                  key={subIndex}
                  to={`/${useLang.lang}${item.link || section.link}`}
                  className="resultText item-text"
                >
                  {item.name ||
                    item.question ||
                    item.title ||
                    Object.values(item)
                      .filter((v) => typeof v === "string")
                      .join(" • ")}
                </HashLink>
              ))}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SearchCatalog;
