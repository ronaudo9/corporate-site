import Image from "next/image";

export const Sidebar = () => {
  return (
    <>
      <div className="mb-14">
        <div className="mb-7 flex flex-col items-center justify-center">
          <div className="mb-7 size-32 ">
            <Image
              className="rounded-full"
              src="/author.jpg"
              alt="author"
              width={130}
              height={130}
            />
          </div>
          <p className="text-lg font-bold">Name Name</p>
        </div>
        <p className="text-sm">
          プロフィールテキストテキストテキストテキストテキ
          ストテキストテキストテキストテキストテキストテキ
          ストテキストテキストテキストテキストテキストテキ
          ストテキストテキストテキストテキストテキストテキ ストテキストテキスト
        </p>
      </div>
      <div className="mb-14">
        <p className="mb-7 text-center text-lg font-bold">Ranking</p>
        <div className="mb-7">
          <Image
            className="w-full"
            src="/ranking1.jpg"
            alt="ranking1"
            width={345}
            height={194}
          />
          <p className="text-sm">
            タイトルテキストテキストテキストテキストテキスト テキスト
          </p>
        </div>
        <div className="mb-7">
          <Image
            className="w-full"
            src="/ranking2.jpg"
            alt="ranking2"
            width={345}
            height={194}
          />
          <p className="text-sm">
            タイトルテキストテキストテキストテキストテキスト テキスト
          </p>
        </div>
        <div className="mb-7">
          <Image
            className="w-full"
            src="/ranking3.jpg"
            alt="ranking3"
            width={345}
            height={194}
          />
          <p className="text-sm">
            タイトルテキストテキストテキストテキストテキスト テキスト
          </p>
        </div>
      </div>
      <p className="mb-7 text-center text-lg font-bold">Archive</p>
      <table className="w-full ">
        <tbody>
          <tr>
            <td className="border-y border-gray-600  py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
          <tr>
            <td className="border-y border-gray-600 py-5 pl-5 text-sm">
              XXXX年XX月(XX)
            </td>
          </tr>
        </tbody>
      </table>
      <div />
    </>
  );
};
