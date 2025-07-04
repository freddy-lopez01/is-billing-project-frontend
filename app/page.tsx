import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/uo_logo.svg.png"
          alt="UO logo"
          width={180}
          height={38}
          priority
        />
		<h1 className="text-4xl sm:text-5xl lg:text-6xl font-regular text-center text-gray-800">Billing Project</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </div>
      </main>
    </div>
  );
}
