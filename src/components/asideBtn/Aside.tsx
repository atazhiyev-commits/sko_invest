import { useEffect, useState, type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { lang } from "@/shared/store/lg";
import type { ArrList } from "@/types/translateTypes";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

import "./buttonAside.scss";

interface Props {
  name: string;
  activeLink: string;
  list?: ArrList[];
  className?: string;
}

const Aside: FC<Props> = ({ name, list, activeLink, className }) => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState<string>("");
  const [threeActive, setThreeActive] = useState<string>("");

  const clean = (s: string) => s.replace("/", "");
  
  const toggleSecondLevel = (link: string) => {
    setSecondActive((prev) => (prev === link ? "" : link));
  };

  const location = useLocation().pathname.split("/");
  const last3 = location.at(3);
  const last4 = location.at(4);
  const last5 = location.at(5);

  useEffect(() => {
    setSecondActive(last4 ? clean(last4) : "");
    setThreeActive(last5 ? clean(last5) : "");

    const link = activeLink.replace("/", "");

    setActive(link === last3);
  }, [last3, last4, last5]);

  useEffect(() => {
    if (secondActive === last3) {
      setSecondActive(clean(last3));
    } else if (secondActive === last4) {
      setSecondActive(clean(last4));
    }
  }, [last4, last3]);

  return (
    <div className="btnaside" data-active={active}>
      <Link
        state={{ name: name }}
        to={`/${lang}/catalog${activeLink}`}
        className={clsx("buttonAside", className)}
        onClick={() => {
          if (list && list.length > 0) {
            setActive(true);
          }
        }}
      >
        <span className="buttonAside__name">
          {name}
          {list && list.length > 0 && (
            <ChevronDown size={16} className="chevron" />
          )}
        </span>
      </Link>

      <div className="collapse-wrapper" data-open={active}>
        <ul className="second">
          {list?.map((item, index) => (
            <li key={index} className="second__li">
              <Link
                state={{ name: item.name }}
                to={`/${lang}/catalog${activeLink}${item.link}`}
                className={clsx("item-header")}
                data-color={secondActive === clean(item.link)}
                onClick={() => {
                  toggleSecondLevel(clean(item.link));
                }}
              >
                {item.name}
                {item.list && (
                  <ChevronDown
                    size={14}
                    className={clsx("chevron-small", {
                      rotated: secondActive === clean(item.link),
                    })}
                  />
                )}
              </Link>

              {item.list && (
                <div
                  className="collapse-wrapper"
                  data-open={secondActive === clean(item.link)}
                >
                  <ul className="three">
                    {item.list.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="three__li"
                        data-color={
                          threeActive === subItem.link?.replace("/", "")
                        }
                      >
                        <Link
                          state={{ name: subItem.name }}
                          className={clsx(
                            last5 === subItem.link?.replace("/", "")
                              ? "active"
                              : ""
                          )}
                          to={`/${lang}/catalog${activeLink}${item.link}${subItem.link}`}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
