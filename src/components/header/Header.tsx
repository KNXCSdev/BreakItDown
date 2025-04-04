import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="bg-gray-0 mx-auto flex w-full max-w-[120rem] items-center justify-between gap-10 py-[1.2rem]">
      <h1 className="text-4xl font-medium">Coding Problems</h1>
      <div>
        <ul className="flex list-none items-center gap-4">
          <li>
            <label className="relative flex h-full cursor-pointer items-center">
              <input className="peer hidden" id="toggle" type="checkbox" />
              <div className="relative h-[37px] w-[110px] rounded-full bg-blue-100 shadow-sm duration-300 peer-checked:bg-zinc-500 after:absolute after:top-[5px] after:left-[5px] after:h-[27px] after:w-[27px] after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 after:shadow-md after:duration-300 after:content-[''] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 active:after:w-[50px]"></div>
              <HiOutlineSun className="absolute left-[8px] h-8 w-8 fill-white peer-checked:opacity-60" />

              <HiOutlineMoon className="absolute right-[8px] h-8 w-8 fill-black opacity-60 peer-checked:fill-white peer-checked:opacity-70" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
