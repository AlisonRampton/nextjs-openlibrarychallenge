"use client";

import Image from "next/image";
import { fetchFilteredWorks } from "@/app/lib/data";
import { Work } from "@/app/lib/definitions";

export default async function WorksTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const works: Work[] = await fetchFilteredWorks(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-300 p-2 md:pt-0">
          <div className="md:hidden">
            {works?.map((work: Work) => (
              <div
                key={work.key}
                className="mb-2 w-full rounded-md bg-white hover:bg-indigo-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={`https://covers.openlibrary.org/b/olid/${work.edition_key[0]}-M.jpg`}
                        className="mr-2 rounded-sm"
                        // fallbackSrc="https://openlibrary.org/images/icons/avatar_book-sm.png"
                        width={64}
                        height={64}
                        placeholder="blur"
                        blurDataURL="https://openlibrary.org/images/icons/avatar_book-sm.png"
                        alt={`Book cover`}
                      />
                      <p className="text-xl">
                        {`${work.title} (${work.first_publish_year})`}
                      </p>
                    </div>
                  </div>
                  <div className="ml-8 flex items-center overflow-hidden">
                    <p className="text-xs text-gray-500">{`${
                      work.author_name[0]
                    }${work.author_name[1] ? " et al." : ""}`}</p>
                    <Image
                      src={`https://covers.openlibrary.org/a/olid/${work.author_key[0]}-M.jpg`}
                      className="m-2 rounded-md hidden sm:inline-block object-cover"
                      // fallbackSrc="https://openlibrary.org/static/images/icons/avatar_author-lg.png"
                      width={32}
                      height={32}
                      placeholder="blur"
                      blurDataURL="https://openlibrary.org/static/images/icons/avatar_author-lg.png"
                      alt={`${work.author_name[0]}'s profile picture`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {works?.map((work) => (
                <tr
                  key={work.key}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={`https://covers.openlibrary.org/a/olid/${work.author_key}-M.jpg`}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${work.author_name}'s profile picture`}
                      />
                      <p>{work.author_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{work.title}</td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td> */}
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
