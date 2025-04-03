import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[26rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar />

      <main className="bg-grey-50 overflow-auto pt-[1rem] pb-[6.4rem]">
        <div className="mx-auto my-0 flex w-full flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
