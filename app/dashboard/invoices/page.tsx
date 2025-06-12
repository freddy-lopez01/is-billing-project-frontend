import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';

export default async function Page(props: {
	searchParams?: Promise<{
		query?: string;
		page?: string;
		}>;
  	}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between">
				<h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
			</div>
				<Table />
			<div className="mt-5 flex w-full justify-center">
			</div>
		</div>
	);
}

