import Table from "../components/coding-problems/Table";
import Header from "../components/header/Header";
import SortArea from "../ui/SortArea";

export default function CodingProblems() {
  return (
    <>
      <div className="mx-auto max-w-[120rem]">
        <Header />
        <SortArea />
      </div>
      <Table />
    </>
  );
}
