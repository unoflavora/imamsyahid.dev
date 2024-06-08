import Button from "@/components/ui/Button";
import TextSwitcher from "@/components/ui/TextSwitcher";
import Image from "next/image";
import Link from "next/link";

export default function MeDescriptions() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl md:text-3xl font-semibold text-argent">
        I develop
        <TextSwitcher texts={["web apps", "games", "software"]} />
      </h1>
      <h2 className="text-base md:text-2xl text-argent leading-snug">
        I&apos;m Imam Syahid, a passionate full-stack engineer living in
        Bandung, Indonesia. My work spans across multiple diciplines from games,
        web apps, and general software alike.
      </h2>

      <h3 className="flex gap-2 items-center text-sm text-argent">
        <div className="w-3 h-3 rounded-full bg-green-500"></div> Available for
        new opportunities
      </h3>

      <Button>
        <Link href="/contact" className="flex gap-2">
          <Image src={"/mail.svg"} height={25} width={25} alt="mail-label" />
          Contact Me
        </Link>
      </Button>
    </div>
  );
}
