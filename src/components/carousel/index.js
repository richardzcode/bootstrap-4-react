import Carousel from './Carousel';
import CarouselInner from './CarouselInner';
import CarouselItem from './CarouselItem';
import CarouselCaption from './CarouselCaption';
import CarouselControlPrev from './CarouselControlPrev';
import CarouselControlPrevIcon from './CarouselControlPrevIcon';
import CarouselControlNext from './CarouselControlNext';
import CarouselControlNextIcon from './CarouselControlNextIcon';
import CarouselIndicators from './CarouselIndicators';
import CarouselIndicator from './CarouselIndicator';

Carousel.Inner = CarouselInner;
Carousel.Item = CarouselItem;
Carousel.Caption = CarouselCaption;
Carousel.Prev = CarouselControlPrev;
Carousel.Next = CarouselControlNext;
Carousel.Indicators = CarouselIndicators;
Carousel.Indicator = CarouselIndicator;

Carousel.Prev.Icon = CarouselControlPrevIcon;
Carousel.Next.Icon = CarouselControlNextIcon;

export default Carousel;
