import type { ReactNode } from "react";
import LogoApp from "../assets/App_Name.png";
type LayoutProps = {
  children: ReactNode;
};
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-amber-300">
      <header className="absolute w-full">
        <img src={LogoApp} alt="logo da aplicação" className="block" />
      </header>

      <main className="flex-1 p-3">{children}</main>
    </div>
  );
}
