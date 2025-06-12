import { promises as fs } from 'fs';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/pirgs/tables';
import RecurringChargesTabs from '@/app/ui/invoices/RecurringChargesTabs';



export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/data/recurring.json', 'utf8');
  const data = JSON.parse(file);

  data.forEach((entry: any) => console.log(entry));
  return (
    <div>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Recurring Charges
      </h1>
	  <RecurringChargesTabs data={data} />
    </div>
  );
}
