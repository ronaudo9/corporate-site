"use client";
import Image from "next/image";
import Link from "next/link";
import useMedia from "use-media";
export default function Home() {
  const isMobile = useMedia({ maxWidth: 640 });
  return (
    <>
      <header className="fixed top-0 z-10 w-full">
        <div className="mx-auto h-16 max-w-6xl px-4">
          <h1 className="p-5 px-4 text-2xl leading-none "> Travel Blog</h1>
        </div>
        <div className="bg-gray-600">
          <nav className="top-20 mx-auto flex h-9 max-w-6xl items-center overflow-x-auto  px-4">
            <ul className="flex  w-full px-4 text-xs text-white">
              <li>NEW</li>
              <li className="ml-14">COLUMN</li>
              <li className="ml-14">SERIES</li>
              <li className="ml-14">Q&A</li>
              <li className="ml-14">CONTACT</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mx-auto mt-36 grid max-w-6xl grid-cols-1 md:grid-cols-3 md:gap-x-6">
        <div className="px-4">
          <Image
            className="w-full"
            src="/pickup1.jpg"
            alt="pickup1"
            width={isMobile ? 373 : 373}
            height={isMobile ? 210 : 210}
          />
          <p className="mb-3.5 mt-2.5 text-lg font-bold">
            タイトルテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className="text-center">
            <Link
              href="#"
              className="inline-block underline hover:no-underline"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="px-4">
          <Image
            className="w-full"
            src="/pickup2.jpg"
            alt="pickup2"
            width={isMobile ? 373 : 373}
            height={isMobile ? 210 : 210}
          />
          <p className="mb-3.5 mt-2.5 text-lg font-bold">
            タイトルテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className="text-center">
            <Link
              href="#"
              className="inline-block underline hover:no-underline"
            >
              READ MORE
            </Link>
          </div>
        </div>
        <div className="px-4">
          <Image
            className="w-full"
            src="/pickup3.jpg"
            alt="pickup3"
            width={isMobile ? 373 : 373}
            height={isMobile ? 210 : 210}
          />
          <p className="mb-3.5 mt-2.5 text-lg font-bold">
            タイトルテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className="text-center">
            <Link
              href="#"
              className="inline-block underline hover:no-underline"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-11 px-4 md:mx-auto md:max-w-6xl md:grid-cols-3">
        <div className="bg-yellow-50 md:col-span-2">aa</div>
        <div className="bg-gray-50 md:col-span-1">aa</div>
      </div>
      <footer className="mt-36 bg-green-100">aa</footer>
    </>
  );
}
