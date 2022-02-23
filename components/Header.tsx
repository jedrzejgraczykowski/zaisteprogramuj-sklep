import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="max-w-7xl mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-2">
        <Link href="/">
          <a className={`pr-4 hover:font-black ${router.pathname == '/' ? "font-black" : ""}`}>Główna</a>
        </Link>
        <Link href="/about">
          <a className={`px-2 hover:font-black ${router.pathname == '/about' ? "font-black" : ""}`}>About</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;