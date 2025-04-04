import { HiOutlineSearch } from "react-icons/hi";
import Filter from "./Filter";
import SortSelect from "./SortSelected";

export default function SortArea() {
  return (
    <div className="bg-grey-0 mb-4 flex items-center justify-between gap-4 py-[1.2rem]">
      <div className="relative w-88">
        <input
          placeholder="Search..."
          className="w-full rounded-md border border-gray-200 px-5 py-3 text-xl transition-all"
          name="search"
          type="search"
        />
        <HiOutlineSearch className="absolute top-3 right-3 size-6 text-gray-500" />
      </div>

      <div className="flex gap-4">
        <Filter
          filterField="status"
          options={[
            { value: "all", label: "All" },
            { value: "finished", label: "Finished" },
            { value: "in-progress ", label: "In Progress" },
            { value: "priority ", label: "Priority" },
            { value: "not-started ", label: "Not Started" },
          ]}
        />
        <SortSelect
          options={[
            { value: "startDate-desc", label: "Sort by date (recent first)" },
            { value: "startDate-asc", label: "Sort by date (earlier first)" },
          ]}
        />
      </div>
    </div>
  );
}
