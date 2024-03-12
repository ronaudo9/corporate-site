export const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full">
      <div className="mx-auto h-16 max-w-6xl bg-white px-4">
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
  );
};
