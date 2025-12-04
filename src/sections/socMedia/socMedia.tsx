import type { FC } from "react";
import { FacebookIcon, Instagram, Send } from "lucide-react";
import clsx from "clsx";

import "./socMedia.scss";

interface Props {
  className?: string;
}

const SocMedia: FC<Props> = ({ className }) => {
  return (
    <ul className={clsx("socMedia", className)}>
      <li className="socItem">
        <a className="soc_link" href="https://www.facebook.com/rsk.sko/">
          <FacebookIcon className="iconMedia" size={20} />
        </a>
      </li>
      <li className="socItem">
        <a className="soc_link" href="https://www.instagram.com/sko_kz/">
          <Instagram className="iconMedia" size={20} />
        </a>
      </li>
      <li className="socItem">
        <a className="soc_link" href="https://t.me/s/skonews">
          <Send className="iconMedia" size={20} />
        </a>
      </li>
    </ul>
  );
};

export default SocMedia;
