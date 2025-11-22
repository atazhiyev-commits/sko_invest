import { useState, type FC } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom"; // Проверьте, возможно у вас 'react-router'
import { ChevronDown } from "lucide-react";

import "./buttonAside.scss";

interface SubItem {
  name: string;
  link?: string;
}

interface ListItem {
  name: string;
  link: string;
  list?: SubItem[];
}

interface Props {
  name: string;
  activeLink: string;
  list?: ListItem[];
  className?: string;
}

const ButtonAside: FC<Props> = ({ name, list, activeLink, className }) => {
  const [active, setActive] = useState(false);
  const [secondActive, setSecondActive] = useState<number | null>(null);
  const location = useLocation().pathname;

  // Логика переключения второго уровня (чтобы можно было и открыть, и закрыть)
  const toggleSecondLevel = (index: number) => {
    setSecondActive(secondActive === index ? null : index);
  };

  return (
    <div className="btnaside" data-active={active}>
      {/* 1. ГЛАВНАЯ КНОПКА (ТРИГГЕР) */}
      <Link
        to={activeLink}
        className={clsx("buttonAside", className)}
        onClick={(e) => {
          // Если есть выпадающий список, мы не переходим по ссылке, а открываем меню
          if (list && list.length > 0) {
            e.preventDefault();
            setActive(!active);
          }
        }}
      >
        <span className="buttonAside__name">
          {name}
          {/* Показываем стрелку только если есть список */}
          {list && list.length > 0 && (
            <ChevronDown size={16} className="chevron" />
          )}
        </span>
      </Link>

      {/* 2. ГЛАВНЫЙ ВЫПАДАЮЩИЙ БЛОК (Level 1) */}
      {/* Обертка для анимации height: auto */}
      <div className="collapse-wrapper" data-open={active}>
        <ul className="second">
          {list?.map((item, index) => (
            <li key={index} className="second__li">
              {/* Заголовок второго уровня */}
              <div
                className="item-header"
                onClick={() => toggleSecondLevel(index)}
              >
                {item.name}
                {item.list && (
                  <ChevronDown
                    size={14}
                    className={clsx("chevron-small", {
                      rotated: secondActive === index,
                    })}
                  />
                )}
              </div>

              {/* 3. ВЛОЖЕННЫЙ ВЫПАДАЮЩИЙ БЛОК (Level 2) */}
              {item.list && (
                <div
                  className="collapse-wrapper"
                  data-open={secondActive === index}
                >
                  <ul className="three">
                    {item.list.map((subItem, subIndex) => (
                      <li key={subIndex} className="three__li">
                        <Link to={subItem.link || "#"}>{subItem.name}</Link>
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

export default ButtonAside;
