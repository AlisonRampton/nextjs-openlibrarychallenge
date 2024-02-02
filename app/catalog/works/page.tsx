//This is NOT the main seach page, just a placeholder for making work pages later hopefully

import { ResultPageSkeleton } from "@/app/ui/skeletons";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <div className="w-full">
      <ResultPageSkeleton />
    </div>
  );
}
