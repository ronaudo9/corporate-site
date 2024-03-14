import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full">
      <div className="bg-white">
        <div className="mx-auto  max-w-6xl px-4 py-5">
          <Link href="#">
            <Image src="/logo.svg" alt="Travel Blog" width={145} height={30} />
          </Link>
        </div>
      </div>
      <div className=" bg-gray-800">
        <nav className="top-20 mx-auto flex h-9 max-w-6xl items-center overflow-x-auto  px-4">
          <ul className="flex  w-full text-xs text-white">
            <Link href="#">
              <li>NEW</li>
            </Link>
            <Link href="#">
              <li className="ml-14">COLUMN</li>
            </Link>
            <Link href="#">
              <li className="ml-14">SERIES</li>
            </Link>
            <Link href="#">
              <li className="ml-14">Q&A</li>
            </Link>
            <Link href="#">
              <li className="ml-14">CONTACT</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
