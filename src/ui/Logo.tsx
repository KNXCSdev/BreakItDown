export default function Logo() {
  return (
    <div className="flex w-full justify-center">
      <img
        src={`/logo3.png`}
        alt="BreakItDown logo"
        loading="lazy"
        className="h-[100px] w-[221px] object-cover"
      />
    </div>
  );
}
