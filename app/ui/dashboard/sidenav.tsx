import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import Image from "next/image";
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
	  <Link href="/dashboard">
        <div className="mb-6 w-full rounded-lg bg-gray-200 p-2"> 
          <div className=" item-center rounded-md overflow-hidden">
            <Image
              src="/UO_letter.png"
              alt="UO Logo"
              width={80}
              height={60}
              priority
              className="rounded-md overflow-hidden"
            />
          </div>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
		  <Link href="/">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-200 hover:text-green-800 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
		  </Link>
        </form>
      </div>
    </div>
  );
}

