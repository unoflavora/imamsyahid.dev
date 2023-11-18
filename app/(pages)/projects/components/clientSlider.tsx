"use client";
import { ProjectDoc } from "@/app/types/ContentData";
import ContentImage from "@/components/ui/ContentImage";
import { cn } from "@/lib/utils";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PhotoGallery({
  photos,
}: {
  photos: ProjectDoc["slider"];
}) {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = useRef<Slider>(null);

  return (
    <div
      className={cn(
        "w-full md:w-[120%] lg:w-[150%] overflow-visible flex flex-col gap-3",
        "animate-jumpIn"
      )}
    >
      <Slider ref={slider} className="w-full bg-red-200" {...settings}>
        {photos.map((photo) => {
          return (
            <ContentImage
              renderOnClient
              key={photo.title}
              image={photo.image}
              className="h-[20rem] md:h-[30rem] lg:h-[32rem]"
            />
          );
        })}
      </Slider>

      <div className="w-full flex justify-center items-center gap-4 ">
        <button onClick={() => slider?.current?.slickPrev()}>
          <ArrowLeft />
        </button>

        <button onClick={() => slider?.current?.slickNext()}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
