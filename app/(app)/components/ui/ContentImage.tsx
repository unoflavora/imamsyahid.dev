import { cn } from "@/lib/utils";
import MediaData from "@/types/MediaData";
import Image from "next/image";
import React from "react";
export default function ContentImage(
  props: {
    image: MediaData;
    config: {
      renderOnClient?: boolean;
      base64?: string;
    };
  } & React.HTMLAttributes<HTMLOrSVGImageElement> & { priority?: boolean },
) {
  const { image, config } = props;

  const src = image.url;

  if (image == null) return;

  return (
    <Image
      {...props}
      placeholder={config.renderOnClient ? "empty" : "blur"}
      blurDataURL={config.base64}
      src={src}
      sizes="100%"
      width={0}
      height={0}
      alt={`cover image of ${image.filename}`}
      className={cn(
        "w-full h-96 group-hover:brightness-[90%] transition-all object-cover object-left-top",
        props.className,
      )}
    />
  );
}
