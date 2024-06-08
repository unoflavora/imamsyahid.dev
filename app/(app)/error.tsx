"use client";
import Link from "next/link";
import Me from "./components/Me";
import Button from "@/components/ui/Button";
import { Undo2Icon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full flex flex-col gap-20">
      <Me />
      <div className="flex flex-col gap-2 animate-component-in-bottom">
        <h1 className=" text-lg">Oops!</h1>
        <p className="text-argent">
          I&apos;m sorry! There is something wrong in my side:
        </p>
        <p className="text-argent"> {error.message}</p>
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
