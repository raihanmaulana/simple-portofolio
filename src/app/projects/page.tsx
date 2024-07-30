import Separator from "../components/component/separator";
import BG from "/public/bg.jpg";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-6 px-6">
      <div className="flex flex-col max-w-xl w-full h-auto grow gap-y-8 md:gap-y-12">
        {/* Projects */}
        <div className="flex flex-col gap-y-2 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-4">
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={BG}
                alt="sikpb"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"https://yasawaskitha.site"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                SIPKB <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
            <div className="flex flex-col gap-y-1.5">
              <Image
                src={BG}
                alt="sikpb"
                className="border-2 rounded-2xl bg-accent p-4 object-scale-down aspect-[4/3]"
              />
              <Link
                href={"#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium text-center text-xs md:text-sm"
              >
                Coming Soon Projects{" "}
                <ArrowUp size={14} className="inline rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
