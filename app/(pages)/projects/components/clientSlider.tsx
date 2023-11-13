"use client";
import { ProjectDoc } from "@/app/types/ContentData";
import ContentImage from "@/components/ui/ContentImage";
import { cn } from "@/lib/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotoGallery({
  photos,
}: {
  photos: ProjectDoc["slider"];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={cn("w-full", "animate-jumpIn")}>
      <Slider className="w-full" {...settings}>
        {photos.map((photo) => {
          return (
            <ContentImage
              renderOnClient
              key={photo.title}
              image={photo.image}
            />
          );
        })}
      </Slider>
    </div>
  );
}
