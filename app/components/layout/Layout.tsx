import Head from "next/head";
import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Zaiste Programuj Shop</title>
        <meta name="description" content="Zaiste programuj shop -- description"></meta>
      </Head>
      <Header />
      <div className="flex-grow max-w-7xl mx-auto my-5">{children}</div>
      <Footer />
    </div>
  );
};