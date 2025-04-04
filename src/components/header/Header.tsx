import { HiOutlineMoon, HiOutlinePlus, HiOutlineSun } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="bg-gray-0 flex items-center justify-between gap-10 py-[1.2rem]">
      <h1 className="text-4xl font-medium">Coding Problems</h1>
      <div>
        <ul className="flex list-none items-center gap-4">
          <li>
            <label className="relative flex h-full cursor-pointer items-center">
              <input className="peer hidden" id="toggle" type="checkbox" />
              <div className="relative h-[37px] w-[110px] rounded-full bg-green-100 shadow-sm duration-300 peer-checked:bg-zinc-500 after:absolute after:top-[5px] after:left-[5px] after:h-[27px] after:w-[27px] after:rounded-full after:bg-gradient-to-r after:from-teal-500 after:to-teal-400 after:shadow-md after:duration-300 after:content-[''] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 active:after:w-[50px]"></div>
              <HiOutlineSun className="absolute left-[8px] h-8 w-8 fill-white peer-checked:opacity-60" />

              <HiOutlineMoon className="absolute right-[8px] h-8 w-8 fill-black opacity-60 peer-checked:fill-white peer-checked:opacity-70" />
            </label>
          </li>
          <li>
            <button className="flex cursor-pointer items-center gap-4 rounded-lg border-none bg-teal-600 px-8 py-2 text-[1.6rem] font-medium text-white transition-[0.2s] hover:bg-teal-700">
              <HiOutlinePlus className="h-[2rem] w-[2rem]" />
              Add New
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
