import clsx from "clsx";

import "./small.scss";

interface SmallCardProps {
  title: string;
  date: string;
  imageSrc?: string;
  className?: string;
}

const SmallImg: React.FC<SmallCardProps> = ({
  title,
  date,
  imageSrc,
  className,
}) => {
  return (
    <div className={clsx("SmallImg", className)}>
      <div className="news-image">
        <img src={imageSrc} className="bgImage" alt={title} />
      </div>
      <div className="news-info">
        <span className="news-date">{date}</span>
        <p className="news-title">{title}</p>
      </div>
    </div>
  );
};

export default SmallImg;
