import Image from "next/image";
import Link from "next/link";
import "@mantine/core/styles.css";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8   sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  row-start-2 items-center ">
        <div>
          <div className="h-[300px] w-[400px] ">
            <Image src="/wlc.png" alt="Next.js logo" width={400} height={200} />
          </div>
          <h1 className="text-center">to basic</h1>
          <div className="flex justify-center items-center">
            <Image src="/unix.png" alt="Next.js logo" width={200} height={38} />
            Command learning platform
          </div>

          <ol className="list-inside list-decimal text-sm text-center pb-10 sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by learning click Learn UNIX Button
            </li>
            <li>Basic UNIX Commands only.</li>
          </ol>
        </div>
        <div className="pb-4 flex gap-4 justify-center text-center items-center flex-col sm:flex-row">
          <Link
            className=" rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/unix"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Learn UNIX
          </Link>
        </div>
      </main>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
      </div>
      <div className="flex flex-col justify-end items-center">
        <h1 className="text-2xl font-bold pt-3">Mst.Fahmida Jesmin</h1>
        <h1 className="text-2xl  pt-2">ID:231014082</h1>
      </div>
    </div>
  );
}
