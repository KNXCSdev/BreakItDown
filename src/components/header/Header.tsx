import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";

export default function Header() {
  const isDarkMode = false;

  return (
    <div className="bg-grey-0 flex items-center justify-between gap-10 border-b border-gray-100 px-[4.8rem] py-[1.2rem]">
      <h1 className="text-3xl font-medium">Coding Problems</h1>
      <div>
        <ul className="flex list-none items-center gap-4">
          <li>
            <button className="cursor-pointer rounded-[--border-radius-sm] border-none bg-none p-2.5 transition-[0.2s]">
              {isDarkMode ? (
                <HiOutlineSun className="text-brand-600 h-[2.2rem] w-[2.2rem]" />
              ) : (
                <HiOutlineMoon className="text-brand-600 h-[2.2rem] w-[2.2rem]" />
              )}
            </button>
          </li>
          <li>
            <button className="flex items-center gap-4 rounded-lg border-none bg-teal-600 px-8 py-2 text-[1.6rem] font-medium text-white transition-[0.2s] hover:bg-teal-700">
              <HiPlus className="text-white" />
              Add New
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
