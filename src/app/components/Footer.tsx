import Script from "next/script";
export const Footer = () => {
  return (
    <footer className="mt-36 w-full bg-gray-100">
      <div className="mx-auto mb-14 grid grid-cols-1 gap-14 px-4 md:max-w-6xl md:grid-cols-3">
        <div className="mt-12 ">
          <p className="pb-7 text-lg font-bold">About</p>
          <p className="pb-5 text-sm">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <ul>
            <li>▶︎プロフィール詳細</li>
            <li>▶︎お仕事の依頼</li>
            <li>▶︎お問い合わせ</li>
          </ul>
        </div>
        <div className=" mt-12 ">
          <p className="pb-7 text-lg font-bold">Menu</p>
          <ul className="divide-y divide-gray-600 border-y border-gray-600">
            <li className="py-3.5 pl-3.5 text-sm">NEW</li>
            <li className="py-3.5 pl-3.5 text-sm">CATEGORY</li>
            <li className="py-3.5 pl-3.5 text-sm">COLUMN</li>
            <li className="py-3.5 pl-3.5 text-sm">SERIES</li>
            <li className="py-3.5 pl-3.5 text-sm">Q&A</li>
          </ul>
        </div>
        <div className=" mt-12 w-full ">
          <p className="pb-7 text-lg font-bold ">Twitter</p>
          <a
            className="twitter-timeline"
            data-height="315"
            data-width="100%"
            href="https://twitter.com/X?ref_src=twsrc%5Etfw"
          >
            Tweets by X
          </a>
          <Script
            src="https://platform.twitter.com/widgets.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
      <p className="pb-2.5 text-center text-xs">
        ©&nbsp;Travel&nbsp;&&nbsp;Blog
      </p>
    </footer>
  );
};
