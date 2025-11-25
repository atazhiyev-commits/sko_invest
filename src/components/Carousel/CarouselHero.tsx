import { type FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";
import Fade from "embla-carousel-fade";

import "./emblaHero.scss";

interface Props {
  imageList: any;
  countNews: number;
  className?: string;
  classNameImg?: string;
}

const CarouselHero: FC<Props> = ({ imageList, className, classNameImg }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
    Fade(),
  ]);

  return (
    <div className={clsx("embla-hero", className)} ref={emblaRef}>
      <div className="embla-hero__container">
        {imageList.map((image: string, index: number) => (
          <div
            key={index}
            className={classNameImg}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
