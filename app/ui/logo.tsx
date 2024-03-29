import { BookOpenIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BookOpenIcon className="h-12 w-12 rotate-[-20deg] shrink-0" />
      <p className="text-[44px] ml-1">Varro Library</p>
    </div>
  );
}
