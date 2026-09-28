'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
  type KeyboardEvent,
} from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CarouselApi = NonNullable<UseEmblaCarouselType[1]>;

interface CarouselContextValue {
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('Carousel controls must be rendered inside Carousel.');
  return context;
}

interface CarouselProps extends ComponentProps<'div'> {
  options?: Parameters<typeof useEmblaCarousel>[0];
}

export function Carousel({ children, className, options, onKeyDown, ...props }: CarouselProps) {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: 'start', ...options });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const updateScrollState = useCallback((carouselApi: CarouselApi) => {
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    const frameId = window.requestAnimationFrame(() => updateScrollState(api));
    api.on('select', updateScrollState);
    api.on('reInit', updateScrollState);
    return () => {
      window.cancelAnimationFrame(frameId);
      api.off('select', updateScrollState);
      api.off('reInit', updateScrollState);
    };
  }, [api, updateScrollState]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollNext();
    }
  };

  return (
    <CarouselContext.Provider value={{ api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div
        role="region"
        aria-roledescription="carousel"
        className={cn('relative', className)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div ref={viewportRef} className="overflow-hidden">
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('-ml-4 flex touch-pan-y', className)} {...props} />;
}

export function CarouselItem({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full pl-4', className)}
      {...props}
    />
  );
}

interface CarouselControlProps extends ComponentProps<'button'> {
  direction: 'previous' | 'next';
}

export function CarouselControl({ direction, className, ...props }: CarouselControlProps) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarouselContext();
  const isPrevious = direction === 'previous';
  const Icon = isPrevious ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={isPrevious ? 'Предыдущий отзыв' : 'Следующий отзыв'}
      onClick={isPrevious ? scrollPrev : scrollNext}
      disabled={isPrevious ? !canScrollPrev : !canScrollNext}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  );
}

export function useCarousel() {
  return useCarouselContext();
}
