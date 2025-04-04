import { HiPlus } from "react-icons/hi2";

export default function CreateNewItem() {
  return (
    <div className="relative flex h-100 w-[32%] grow-1 cursor-pointer flex-col rounded-xl border border-gray-200 bg-blue-500 shadow-md">
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <button className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-none bg-blue-200 transition-all duration-300 focus:outline-none active:scale-95">
          <HiPlus className="h-20 w-20 text-white" />
        </button>
        <span className="block w-full rounded-md text-4xl text-white">
          New Problem
        </span>
      </div>
    </div>
  );
}
