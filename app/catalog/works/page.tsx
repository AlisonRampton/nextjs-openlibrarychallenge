//This is NOT the main seach page, just a placeholder for making work pages later hopefully

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    workID: string;
  };
}) {
  // const work = await fetchIndividualWork(workID);
  return <div className="w-full">{searchParams?.workID}</div>;
}
