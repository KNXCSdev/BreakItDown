export default function SortArea() {
  return (
    <div className="bg-grey-0 flex items-center justify-between gap-4 px-[4.8rem] py-[1.2rem]">
      <input
        type="text"
        className="w-full rounded-md border border-teal-700 px-4 py-3 text-xl placeholder:text-gray-400"
        placeholder="Search"
      />
      <input
        type="text"
        className="w-full rounded-md border border-teal-700 px-4 py-2 text-xl placeholder:text-gray-400"
        placeholder="Search"
      />{" "}
      <input
        type="text"
        className="w-full rounded-md border border-teal-700 px-4 py-2 text-xl placeholder:text-gray-400"
        placeholder="Search"
      />{" "}
      <input
        type="text"
        className="w-full rounded-md border border-teal-700 px-4 py-2 text-xl placeholder:text-gray-400"
        placeholder="Search"
      />{" "}
      <select className="rounded-md border border-teal-700 px-4 py-2 text-xl placeholder:text-gray-400">
        {" "}
        <option value="" disabled selected>
          Status
        </option>
      </select>
    </div>
  );
}
