import { lusitana } from "./fonts";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ResultPageSkeleton() {
  return (
    <div>
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl h-24 bg-gray-100 p-2 shadow-sm`}
      ></div>
      <WorksTableSkeleton />
    </div>
  );
}

export function WorksTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <WorksMobileSkeleton />
            <WorksMobileSkeleton />
            <WorksMobileSkeleton />
            <WorksMobileSkeleton />
            <WorksMobileSkeleton />
            <WorksMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-400 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Cover
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Author
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Year
                </th>
                <th
                  scope="col"
                  className="px-3 py-5 font-medium hidden lg:flex"
                >
                  # of Editions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function WorksMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="m-2 h-16 w-16 rounded-sm bg-gray-100"></div>
          <div className="m-2 h-10 w-40 rounded bg-gray-100"></div>
        </div>
        <div className="flex items-center">
          <div className="m-2 h-6 w-24 rounded bg-gray-100"></div>
          <div className="m-2 h-12 w-8 rounded-md bg-gray-100 hidden sm:inline-block"></div>
        </div>
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Cover */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-sm bg-gray-100"></div>
        </div>
      </td>
      {/* Title */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Author */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Year */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
      {/* # of editions */}
      <td className="whitespace-nowrap px-3 py-3 hidden lg:table-cell">
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </td>
    </tr>
  );
}
