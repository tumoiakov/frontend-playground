import {
  ReactNode,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./Slideshow.css";
import clsx from "clsx";

type SlideshowProps = {
  children: ReactNode[];
};
const Slideshow = memo(({ children }: SlideshowProps) => {
  const slidesRefs = useRef<Nullable<HTMLDivElement>[]>([]);
  const slideshowRef = useRef<HTMLDivElement>(null);

  const [currentPos, setCurrentPos] = useState<number>(0);
  const [count, setCount] = useState<number>(4);

  const slides = useMemo(
    () =>
      children.map((slide, index) => (
        <div
          key={`slide-${index}`}
          ref={(elem) => {
            if (elem) slidesRefs.current[index] = elem;
          }}
          className="slide-container"
        >
          {slide}
        </div>
      )),
    [children]
  );

  const visibleSlides = useMemo(
    () => slides.slice(currentPos, currentPos + count),
    [slides, count, currentPos]
  );

  useLayoutEffect(() => {
    const parent = slideshowRef.current?.parentElement;

    function calcCount() {
      const parent = slideshowRef.current?.parentElement;
      const firstSlide = slidesRefs.current?.[0];

      if (parent && firstSlide) {
        const slideshowParentSize = parent?.offsetWidth;
        const buttonSize = 48;
        const slideSize = firstSlide.offsetWidth || 270;
        const count =
          Math.floor((slideshowParentSize - buttonSize) / slideSize) || 1;
        setCount(count);
      }
    }

    if (parent) {
      calcCount();

      const observer = new ResizeObserver(() => {
        calcCount();
      });
      observer.observe(parent);

      return () => observer.disconnect();
    }
  }, []);

  useLayoutEffect(() => {
    setCurrentPos((prev) => {
      if (prev > 0) {
        const slidesCount = children.length || 0;

        if (prev + count > slidesCount) {
          const newPos = prev + (slidesCount - (prev + count));
          return newPos;
        }
      }
      return prev;
    });
  }, [count, children]);

  const isDisabledLeft = useMemo(() => currentPos <= 0, [currentPos]);
  const isDisabledRight = useMemo(
    () => currentPos + count > children.length - 1,
    [children.length, count, currentPos]
  );

  const moveLeft = useCallback(() => {
    if (!isDisabledLeft) {
      setCurrentPos((prev) => prev - 1);
    }
  }, [isDisabledLeft]);

  const moveRight = useCallback(() => {
    if (!isDisabledRight) {
      setCurrentPos((prev) => prev + 1);
    }
  }, [isDisabledRight]);
	
  return (
    <div
      className={clsx("slideshow", count === 1 && "slideshow--single")}
      ref={slideshowRef}
    >
      <button
        className="slideshow__prev"
        type="button"
        onClick={moveLeft}
        disabled={isDisabledLeft}
        aria-label="Предыдущий слайд"
      />
      {visibleSlides}
      <button
        className="slideshow__next"
        type="button"
        onClick={moveRight}
        disabled={isDisabledRight}
        aria-label="Следующий слайд"
      />
    </div>
  );
});

export default Slideshow;
