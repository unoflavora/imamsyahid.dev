"use client";
import Button from "@/components/ui/Button";
import { CheckCircle, Loader2Icon } from "lucide-react";
import { HTMLAttributes, HTMLProps, useState } from "react";
import { sendEmail } from "./actions";
import { cn } from "@/lib/utils";

// ts-ignore because experimental_useFormStatus is not in the types
// @ts-ignore
import { useFormStatus, useFormState } from "react-dom";
import { format } from "path";

export default function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, {});
  const [dataSubmitted, setSubmitData] = useState(false);

  const inputClassName: HTMLAttributes<HTMLInputElement>["className"] =
    "bg-[#ebebeb] dark:bg-white/5 p-2 px-3 placeholder-argent dark:placeholder-white/40 rounded-xl w-full shadow-sm";

  return (
    <form action={formAction} className="relative flex flex-col gap-4">
      <Overlay className={`${dataSubmitted ? "flex" : "hidden"}`} />
      <div className="flex gap-4">
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className={inputClassName}
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          className={inputClassName}
        />
      </div>
      <textarea
        required
        name="text"
        placeholder="Message"
        className={cn(inputClassName, "min-h-[10rem]")}
      />
      <Button
        onClick={() => {
          setSubmitData(true);
        }}
        className="text-white dark:text-black bg-black dark:bg-white w-full flex justify-center hover:text-white hover:bg-black/80 dark:hover:text-black dark:hover:bg-white/80"
      >
        Send
      </Button>
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
function Overlay(props: HTMLProps<HTMLDivElement>) {
  const { pending } = useFormStatus();

  return (
    <div
      {...props}
      className={cn(
        "w-full h-full absolute  justify-center items-center bg-white ",
        props.className
      )}
    >
      {pending ? (
        <Loader2Icon className="text-black animate-spin" size={50} />
      ) : (
        <CheckCircle className="text-black animate-fade" size={50} />
      )}
    </div>
  );
}
