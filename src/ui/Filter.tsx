import { useSearchParams } from "react-router";

interface FilterTypes {
  filterField: string;
  options: { value: string; label: string }[];
}

export default function Filter({ filterField, options }: FilterTypes) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0)!.value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  return (
    <div className="bg-gray-0 flex gap-2 rounded-lg border border-gray-100 p-2 shadow-sm">
      {options.map((option) => (
        <button
          className={`rounded-md border-none px-5 py-1 text-2xl font-medium transition hover:bg-teal-600 hover:text-teal-50 ${option.value === currentFilter ? "bg-teal-600 text-teal-50" : "bg-teal-0"}`}
          onClick={() => handleClick(option.value)}
          key={option.label}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
