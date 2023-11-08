import { Article } from "@/components/ui/ArticleShowcase";
import Button from "@/components/ui/Button";
import TextSwitcher from "@/components/ui/TextSwitcher";
import { CalendarIcon, ClockIcon } from "lucide-react";
import ContactForm from "./form";

export default function Page() {
  return (
    <Article>
      <Article.Header className="flex flex-col gap-4 md:gap-8" title="Contact">
        <h1 className="text-argent">
          Say <TextSwitcher texts={["hola", "hey", "hello"]} />
        </h1>
        <h2 className="text-lg">
          Looking to start a project and need that magical touch? Looking for a
          fulltime developer? Reach out.
        </h2>

        <h3 className="flex gap-2 items-center text-sm text-argent">
          <div className="w-3 h-3 rounded-full bg-green-500"></div> Available
          for new opportunities
        </h3>

        <Button className="text-base md:text-lg items-center">
          <CalendarIcon className="text-argent md:p-0.5" /> Book a Call
        </Button>
      </Article.Header>

      <div className="bg-argent/30 w-full h-[0.005rem]" />

      <Article.Body className="py-4 gap-4">
        <ContactForm />
        <p className="inline-flex items-center gap-1 text-sm">
          <ClockIcon className="text-argent" size={16} />
          Avg. response
          <span className="text-argent ">&nbsp;4 Hours</span>
        </p>
      </Article.Body>
    </Article>
  );
}
