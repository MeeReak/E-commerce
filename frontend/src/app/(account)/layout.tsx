import { NaviDash } from "@/components/NaviDash";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex justify-center gap-x-6">
      <NaviDash />{children}
    </div>
  );
}
