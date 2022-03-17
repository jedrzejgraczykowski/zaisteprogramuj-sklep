import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => (
  <main className="flex-grow max-w-7xl mx-auto my-5">
    {children}
  </main>
);

export default Main;