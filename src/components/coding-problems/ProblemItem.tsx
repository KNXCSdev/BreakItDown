export default function ProblemItem() {
  return (
    <div className="flex max-w-[32%] flex-col rounded-xl border border-gray-200 bg-gray-50 shadow-md">
      <img
        className="h-auto w-full rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h2 className="text-2xl font-bold text-gray-800">Card title</h2>
        <p className="mt-1 text-xl text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="text-md mt-5 text-gray-500">Last updated 5 mins ago</p>
      </div>
    </div>
  );
}
