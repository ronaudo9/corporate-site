import Image from "next/image";
import Link from "next/link";
export const Pickup = () => {
  return (
    <div className="mx-auto mt-36 grid max-w-6xl grid-cols-1 md:grid-cols-3 md:gap-x-6">
      <div className="px-4">
        <Image
          className="w-full"
          src="/pickup1.jpg"
          alt="pickup1"
          width={373}
          height={210}
        />
        <p className="mb-3.5 mt-2.5 text-lg font-bold">
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="px-4">
        <Image
          className="w-full"
          src="/pickup2.jpg"
          alt="pickup2"
          width={373}
          height={210}
        />
        <p className="mb-3.5 mt-2.5 text-lg font-bold">
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="px-4">
        <Image
          className="w-full"
          src="/pickup3.jpg"
          alt="pickup3"
          width={373}
          height={210}
        />
        <p className="mb-3.5 mt-2.5 text-lg font-bold">
          タイトルテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className="text-center">
          <Link href="#" className="inline-block underline hover:no-underline">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};
