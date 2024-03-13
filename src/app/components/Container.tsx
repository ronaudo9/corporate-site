import { Main } from "./Main";
import { Sidebar } from "./Sidebar";
export const Container = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-11 px-4 md:mx-auto md:max-w-6xl md:grid-cols-3">
      <div className="md:col-span-2">
        <Main />
      </div>
      <div className=" md:col-span-1 ">
        <Sidebar />
      </div>
    </div>
  );
};
