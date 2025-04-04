import { useSearchParams } from "react-router";

interface FilterTypes {
  options: { value: string; label: string }[];
}

export default function SortSelect({ options }: FilterTypes) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSort(value: string) {
    searchParams.set("sort", value);

    setSearchParams(searchParams);
  }

  return (
    <select
      className="bg-gray-0 h-full rounded-lg border border-gray-100 px-5 py-3 text-2xl font-medium shadow-sm"
      onChange={(e) => handleSort(e.target.value)}
    >
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
