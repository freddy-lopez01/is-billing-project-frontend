import React from 'react';
import InvoiceDonutChart from './pi-chart';

export default function InvoiceStatusSummary( { invoices } ) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-xl shadow p-6">
      	  <h1 className="text-5xl text-green-600">{statusCounts.paid}</h1>
          <h2 className="text-xl font-semibold mb-2">Paid</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
      	  <h1 className="text-5xl text-xxl text-yellow-600">{statusCounts.pending}</h1>
          <h2 className="text-xl font-semibold mb-2">Pending</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
      	  <h1 className="text-5xl text-red-600">{statusCounts.denied}</h1>
          <h2 className="text-xl font-semibold mb-2">Denied</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
			<InvoiceDonutChart statusCounts={statusCounts} />
        </div>

    </div>
  );
};
