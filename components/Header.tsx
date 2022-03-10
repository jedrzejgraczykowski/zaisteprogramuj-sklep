import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="max-w-7xl mx-auto w-full">
      <nav className="bg-gray-700 text-white font-medium px-4 py-2">
        <Link href="/">
          <a className={`mr-4 hover:selected ${router.pathname == '/' ? "selected" : ""}`}>Home</a>
        </Link>
        <Link href="/products">
          <a className={`mr-4 hover:selected ${router.pathname == '/products' ? "selected" : ""}`}>Products</a>
        </Link>
        <Link href="/about">
          <a className={`mr-4 hover:selected ${router.pathname == '/about' ? "selected" : ""}`}>About</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;