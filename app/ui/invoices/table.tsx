import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredWorks, fetchWorks } from "@/app/lib/data";
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
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {works?.map((work: Work) => (
              <div
                key={work.key}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={`https://covers.openlibrary.org/a/olid/${work.author_key}-M.jpg`}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${work.author_name}'s profile picture`}
                      />
                      <p>{work.author_name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{work.title}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {work.first_publish_year}
                    </p>
                    {/* <p>{formatDateToLocal(invoice.date)}</p> */}
                  </div>
                  {/* <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div> */}
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
