import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo";

const Header = () => {
  const router = useRouter();

  return (
    <header className="max-w-7xl mx-auto w-full">
      <nav className="flex bg-gray-700 text-white font-medium px-4 py-4">
        <Logo />
        <Link href="/">
          <a className={`mr-4 mt-1 hover:selected ${router.pathname == '/' ? "selected" : ""}`}>Home</a>
        </Link>
        <Link href="/products">
          <a className={`mr-4 mt-1 hover:selected ${router.pathname == '/products' ? "selected" : ""}`}>Products</a>
        </Link>
        <Link href="/about">
          <a className={`mr-4 mt-1 hover:selected ${router.pathname == '/about' ? "selected" : ""}`}>About</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;