"use client";

import Logo from "@/app/ui/logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Search from "./ui/search";

export default function Page() {
  const searchParams = useSearchParams();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-emerald-600 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-6 rounded-lg bg-indigo-50 px-6 py-10 md:w-3/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to the Varro Library!</strong>
            <br />
            Search for books below.
          </p>
          <div className="flex-0">
            <Search placeholder="Search works..." />
          </div>

          <Link
            href={`/catalog?${searchParams.toString()}`}
            className="flex items-center gap-5 self-start rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-400 md:text-base"
          >
            <span>Search</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-2/5 md:grow-0 md:px-20 md:py-10">
          <Image
            src="/bookspine.jpg"
            width={699}
            height={1508}
            className="hidden md:block"
            alt="Binding of Varro, Marcus Terentius: De lingua latina, from the University of Glasgow Library"
          />
          <Image
            src="/bookspageside.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Books on a shelf with the spine facing away from the camera"
          />
        </div>
      </div>
    </main>
  );
}
