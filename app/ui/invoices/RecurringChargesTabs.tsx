'use client';

import { useState } from 'react';
import CustomersTable from '@/app/ui/invoices/table';

export default function RecurringChargesTabs({ data }: { data: any[] }) {
  const [tab, setTab] = useState<'active' | 'inactive'>('active');

  const filtered = data.filter(entry =>
    tab === 'active' ? entry.approved === true : entry.approved === false
  );

  return (
    <div>
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setTab('active')}
          className={`px-4 py-2 rounded ${
            tab === 'active'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setTab('inactive')}
          className={`px-4 py-2 rounded ${
            tab === 'inactive'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Inactive
        </button>
      </div>
      <CustomersTable customers={filtered} />
    </div>
  );
}

