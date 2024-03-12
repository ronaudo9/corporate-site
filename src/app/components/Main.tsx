import Image from "next/image";
import Link from "next/link";

export const Main = () => {
  return (
    <>
      <div className="mb-20">
        <div>
          <Link href="#" className="mb-3.5 mt-2.5 text-2xl font-bold">
            タイトルテキストテキストテキストテキストテキスト
          </Link>
          <ul className="mb-2.5 mt-4 flex">
            <li className="mr-5">
              <Link href="/date/2020/01/01">2020/01/01</Link>
            </li>
            <li>
              <Link href="/category/1">カテゴリ1</Link>
            </li>
          </ul>
        </div>
        <Image
          className="w-full"
          src="/main1.jpg"
          alt="main1"
          width={759}
          height={423}
        />
        <p className="px-8 pb-10 pt-2.5 text-base">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <div>
          <Link href="#" className="mb-3.5 mt-2.5 text-2xl font-bold">
            タイトルテキストテキストテキストテキストテキスト
          </Link>
          <ul className="mb-2.5 mt-4 flex">
            <li className="mr-5">
              <Link href="/date/2020/01/01">2020/01/01</Link>
            </li>
            <li>
              <Link href="/category/1">カテゴリ1</Link>
            </li>
          </ul>
        </div>
        <Image
          className="w-full"
          src="/main2.jpg"
          alt="main2"
          width={759}
          height={423}
        />
        <p className="px-8 pb-10 pt-2.5 text-base">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <div>
          <Link href="#" className="mb-3.5 mt-2.5 text-2xl font-bold">
            タイトルテキストテキストテキストテキストテキスト
          </Link>
          <ul className="mb-2.5 mt-4 flex">
            <li className="mr-5">
              <Link href="/date/2020/01/01">2020/01/01</Link>
            </li>
            <li>
              <Link href="/category/1">カテゴリ1</Link>
            </li>
          </ul>
        </div>
        <Image
          className="w-full"
          src="/main3.jpg"
          alt="main3"
          width={759}
          height={423}
        />
        <p className="px-8 pb-10 pt-2.5 text-base">
          本文テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
};
