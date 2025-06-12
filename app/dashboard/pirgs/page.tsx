import { promises as fs } from 'fs';
import StorageCard from '@/app/ui/pirgs/storage-card'; 
import { lusitana } from '@/app/ui/fonts';
import { TotalStorage } from '@/app/lib/definitions';
import { calculateTotalStorage } from '@/app/lib/utils/storage';


export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/data/billing_data.json', 'utf8');
  const data = JSON.parse(file);
  const total = await calculateTotalStorage()

  return (
    <div>
		<div className="flex flex-col gap-y-6">
			<h1 className={`${lusitana.className} text-2xl`}>Volumes</h1>
	  		<div className="bg-white rounded-xl shadow p-6 flex items-baseline gap-4">
  				<h2 className="text-xl font-semibold text-gray-700">Total Allocated Storage:</h2>
  				<h1 className="text-4xl font-bold text-gray-900">{total} TB</h1>
	  		</div>

			{data.billing.storage.map((entry: any, index: number) => (
          	<StorageCard key={index} entry={entry} />
        	))}
		</div>
    </div>
  );
}
