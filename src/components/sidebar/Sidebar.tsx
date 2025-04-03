import Logo from "../../ui/Logo";
import Footer from "./Footer";
import MainNav from "./MainNav";

export default function Sidebar() {
  return (
    <aside className="bg-grey-0 row-span-full flex flex-col items-center gap-16 border-r border-gray-100 px-[2.4rem] pt-[1.2rem] pb-[3.2rem]">
      <Logo />
      <MainNav />
      <Footer />
    </aside>
  );
}
