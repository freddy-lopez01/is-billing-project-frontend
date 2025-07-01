'use client';

import { useState } from 'react';
import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import { formatDateToLocal, totalCost } from '@/app/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import InfoCard from '@/app/ui/invoices/info-card';
export default function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (id: number) => {
    const newSet = new Set(expandedRows);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
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
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pt-4 text-sm text-gray-600 space-y-1"
                          >
						  <InfoCard customer={customer}/>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th className="px-4 py-5 font-medium sm:pl-6">Service ID</th>
                    <th className="px-3 py-5 font-medium">SRC Index -> DST Index</th>
                    <th className="px-3 py-5 font-medium">Quantity</th>
                    <th className="px-3 py-5 font-medium">Start Date</th>
                    <th className="px-3 py-5 font-medium">End Date</th>
                    <th className="px-3 py-5 font-medium">Status</th>
                    <th className="px-3 py-5 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {customers?.map((customer) => {
                    const isOpen = expandedRows.has(customer.service_id);
                    return (
                      <React.Fragment key={customer.service_id}>
                        <tr
                          className="text-sm hover:bg-gray-50 cursor-pointer"
                          onClick={() => toggleRow(customer.service_id)}
                        >
                          <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            {customer.service_id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {customer.src_index} -> {customer.dst_index}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {customer.quantity} </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {formatDateToLocal(customer.start_date)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            {formatDateToLocal(customer.end_date)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3">
                            n/a
                          </td>
                          <td className="whitespace-nowrap bg-green-50 px-3 py-3">
                            {totalCost(customer.quantity, customer.unit_price)}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={7} className="p-0">
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{height: 'auto', opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden bg-gray-50 px-6 py-4 text-sm text-gray-600 space-y-1"
                                >
						        <InfoCard customer={customer}/>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </td>
                        </tr>
                      </React.Fragment>
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
