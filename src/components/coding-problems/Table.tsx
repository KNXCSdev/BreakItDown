export default function Table() {
  return (
    <div className="flex flex-col gap-[1.6rem]">
      <div
        role="table"
        className="bg-grey-0 border border-l-0 border-(--color-gray-200) bg-gray-100 text-2xl"
      >
        <header
          className={`bg-gray-0 mx-auto grid max-w-[120rem] grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem] items-center gap-x-[2.2rem] py-[1.6rem] font-semibold text-gray-600 uppercase transition-none`}
        >
          <div>Name</div>
          <div>Completion</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Last updated</div>
        </header>
      </div>
    </div>
  );
}
