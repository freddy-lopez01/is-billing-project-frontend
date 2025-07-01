import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency, totalCost } from '@/app/lib/utils';

export default function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.service_id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-semibold">{customer.service_id}</p>
                        <p className="text-sm text-gray-500">
                          {customer.src_index}
                        </p>
                        <p className="text-sm text-gray-500">
                          Quantity: {customer.quantity}
                        </p>
                        <p className="text-sm text-gray-500">
                          Unit Price: {formatCurrency(customer.unit_price)}
                        </p>
                        <p className="text-sm text-gray-500">
                          Start: {formatDateToLocal(customer.start_date)}
                        </p>
                        <p className="text-sm text-gray-500">
                          End: {formatDateToLocal(customer.end_date)}
                        </p>
                        <p className="text-sm text-gray-500">
                          Frequency: {customer.frequency_id}
                        </p>
                        <p className="text-sm text-gray-500">
                          Total: {totalCost(customer.quantity, customer.unit_price)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Service ID
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Src index
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Quantity
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Unit Price
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Start Date
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      End Date
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Frequency
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total 
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {customers?.map((customer) => (
                    <tr
                      key={customer.service_id}
                      className="text-sm last-of-type:border-none"
                    >
                      <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        {customer.service_id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {customer.src_index}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {customer.quantity}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {formatCurrency(customer.unit_price)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {formatDateToLocal(customer.start_date)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {formatDateToLocal(customer.end_date)}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3">
                        {customer.frequency_id}
                      </td>
                      <td className="whitespace-nowrap bg-green-50 px-3 py-3">
                        {totalCost(customer.quantity, customer.unit_price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

