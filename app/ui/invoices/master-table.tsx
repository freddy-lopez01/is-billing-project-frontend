'use client';

import { useState } from 'react';
import CustomersTable from '@/app/ui/invoices/table';

export default function MasterChargesTabs({ data }: { data: any[] }) {

  return (
    <div>
      <CustomersTable customers={data} />
    </div>
  );
}


