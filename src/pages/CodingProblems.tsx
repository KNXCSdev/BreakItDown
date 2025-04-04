import ProblemsList from "../components/coding-problems/ProblemsList";
import Header from "../components/header/Header";

export default function CodingProblems() {
  return (
    <>
      <div className="flex w-full flex-col gap-20">
        <Header />
        <hr className="text-gray-200" />
        <ProblemsList />
      </div>
    </>
  );
}
