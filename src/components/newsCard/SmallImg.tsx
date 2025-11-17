import clsx from "clsx";

interface NewsCardProps {
    title: string;
    date: string;
    imageSrc: string;
    className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ className }) => {
    return (
        <div className={clsx("news-card", className)}>

        </div>
    );
};

export default NewsCard;