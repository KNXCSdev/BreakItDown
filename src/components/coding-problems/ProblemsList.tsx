import CreateNewItem from "./CreateNewItem";
import ProblemItem from "./ProblemItem";

export default function ProblemsList() {
  return (
    <div className="mx-auto flex h-full w-full max-w-[120rem] flex-wrap gap-8">
      <ProblemItem />
      <ProblemItem />
      <CreateNewItem />
    </div>
  );
}
