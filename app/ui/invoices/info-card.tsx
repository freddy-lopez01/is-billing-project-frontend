import React from "react";
import { formatDateToLocal, totalCost } from "@/app/lib/utils"; // adjust import path as needed
import { lusitana } from '@/app/ui/fonts';

interface InfoCardProps {
  customer: {
    quantity: number;
    start_date: string;
    end_date: string;
    unit_price: number;
    approvers?: string[];
    contacts?: string[];
    description?: string;
  };
}

export default function InfoCard({ customer }: InfoCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow max-w-4xl w-full">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1 space-y-2 text-sm text-gray-700">
          <p>
            <span className={`${lusitana.className} font-medium`}>Quantity:</span> {customer.quantity}
          </p>
          <p>
            <span className="font-medium">Start:</span> {formatDateToLocal(customer.start_date)}
          </p>
          <p>
            <span className="font-medium">Description:</span> {customer.description}
          </p>
          <p>
          <span className="font-medium">Total:</span> {totalCost(customer.quantity, customer.unit_price)}
          </p>
        </div>
		<div className="flex-1 text-sm text-gray-700">
  			<p className="flex items-center gap-2 m-10 rounded-xl bg-gray-100">
    		<span className="font-medium text-gray-900">
      		{customer.src_index}
    		</span>
    		<span className="text-gray-500">→</span>
    		<span className="font-medium text-gray-900">
      		{customer.dst_index}
    		</span>
  			</p>
		</div>

        <div className="flex-1 space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium">Approvers:</span>{" "}
            {customer.approvers?.join(", ") || "None"}
          </p>
          <p>
            <span className="font-medium">Contacts:</span>{" "}
            {customer.contacts?.join(", ") || "None"}
          </p>
        </div>
      </div>
    </div>
  );
}

