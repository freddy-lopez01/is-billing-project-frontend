'use client'

import { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { formatDateToLocal, formatCurrency, totalCost } from '@/app/lib/utils';

export default function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (id: number) => {
    const newSet = new Set(expandedRows);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedRows(newSet);
  };

  return (
    <div className="w-full">
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => {
                  const isOpen = expandedRows.has(customer.service_id);
                  return (
                    <div
                      key={customer.service_id}
                      className="mb-2 w-full rounded-md bg-white p-4 cursor-pointer"
                      onClick={() => toggleRow(customer.service_id)}
                    >
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-semibold">{customer.service_id}</p>
                          <p className="text-sm text-gray-500">{customer.src_index}</p>
                        </div>
                        <span className="text-blue-600 text-sm">
                          {isOpen ? 'Hide' : 'Details'}
                        </span>
                      </div>
                      {isOpen && (
                        <div className="pt-4 text-sm text-gray-600 space-y-1">
                          <p>Quantity: {customer.quantity}</p>
                          <p>Start: {formatDateToLocal(customer.start_date)}</p>
                          <p>End: {formatDateToLocal(customer.end_date)}</p>
                          <p>Frequency: {customer.frequency_id}</p>
                          <p>Total: {totalCost(customer.quantity, customer.unit_price)}</p>
                          <p>Approvers: {customer.approvers?.join(', ')}</p>
                          <p>Contacts: {customer.contacts?.join(', ')}</p>
                          <p>Description: {customer.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th className="px-4 py-5 font-medium sm:pl-6">Service ID</th>
                    <th className="px-3 py-5 font-medium">Src index</th>
                    <th className="px-3 py-5 font-medium">Quantity</th>
                    <th className="px-3 py-5 font-medium">Start Date</th>
                    <th className="px-3 py-5 font-medium">End Date</th>
                    <th className="px-3 py-5 font-medium">Frequency</th>
                    <th className="px-3 py-5 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {customers?.map((customer) => {
                    const isOpen = expandedRows.has(customer.service_id);
                    return (
                      <>
                        <tr
                          key={customer.service_id}
                          className="text-sm hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleRow(customer.service_id)}
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
                        {isOpen && (
                          <tr className="text-sm text-gray-600 bg-gray-50">
                            <td colSpan={7} className="px-6 py-4 space-y-1">
                              <p><strong>Approvers:</strong> {customer.approvers?.join(', ')}</p>
                              <p><strong>Contacts:</strong> {customer.contacts?.join(', ')}</p>
                              <p><strong>Description:</strong> {customer.description}</p>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

