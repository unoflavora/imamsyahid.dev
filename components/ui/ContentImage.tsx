import { Doc } from "@/app/types/ContentData";
import MediaData from "@/app/types/MediaData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function ContentImage(
  props: {
    image: MediaData;
    renderOnClient?: boolean;
  } & React.HTMLAttributes<HTMLImageElement>
) {
  const { image, renderOnClient } = props;
  if (image == null) return;

  return (
    <Image
      src={renderOnClient ? image.url : process.env.CMS_API + image.url}
      sizes="100%"
      width={0}
      height={0}
      alt={`cover image of ${image.filename}`}
      className={cn(
        "w-full h-96 group-hover:brightness-[90%] transition-all object-cover object-left-top",
        props.className
      )}
    />
  );
}
