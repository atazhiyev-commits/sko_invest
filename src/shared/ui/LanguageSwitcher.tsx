import { type FC } from "react";
import { useLocation, useNavigate } from "react-router";
import i18n from "./../config/i18n/i18n";
import clsx from "clsx";

interface Props {
  className?: string;
}

const LanguageSwitcher: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const currentLang = segments.length > 0 ? segments[0] : "ru";
  const restPath = segments.slice(1).join("/");

  return (
    <select
      name="lang"
      value={currentLang}
      className={clsx("language", className)}
      onChange={(e) => {
        const newUrl = `/${e.target.value}/${restPath}`;

        i18n.changeLanguage(e.target.value);
        navigate(newUrl, { replace: true });
        window.location.reload();
      }}
    >
      <option value="">RU</option>
      <option value="kz">KZ</option>
      <option value="en">EN</option>
      <option value="chi">CHI</option>
    </select>
  );
};

export default LanguageSwitcher;
