import Link from "next/link";
import Me from "./components/Me";
import TextSwitcher from "@/components/ui/TextSwitcher";
import Button from "@/components/ui/Button";
import {
  ArrowBigLeftIcon,
  ArrowLeftFromLineIcon,
  ArrowUpLeftIcon,
  CornerUpLeftIcon,
  SendToBackIcon,
  SkipBackIcon,
  StepBackIcon,
  Undo2Icon,
} from "lucide-react";

export default function NotFound() {
  const notFounds = ["anything", "much", "anyone"];

  return (
    <div className="w-full flex flex-col gap-20">
      <Me />

      <div className="flex flex-col gap-2 animate-component-in-bottom">
        <h1 className="text-argent text-lg">
          Can&apos;t find <TextSwitcher texts={notFounds} />
        </h1>
        <p className="text-argent">
          I&apos;m sorry! This page was either removed, or it never existed at
          all. Not sure which.
        </p>
        <Button>
          <Link href={"/"} className="w-full flex gap-1">
            <Undo2Icon color="rgb(136 136 136)" className="-ml-1 w-5" />
            Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
