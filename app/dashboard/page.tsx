// app/dashboard/page.tsx or page.jsx
import InvoiceStatusSummary from '@/app/ui/dashboard/tally-cards';
import { promises as fs } from 'fs';

export default async function Dashboard() {
  const file = await fs.readFile(process.cwd() + '/data/recurring.json', 'utf8');
  const data = JSON.parse(file);

  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Billing Portal</h1>
	   

      <p className="text-gray-600 mb-8">
      </p>

	  < InvoiceStatusSummary invoices={data} /> 
    </div>
  );
}
