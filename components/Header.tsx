import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto w-full">
      <nav className="bg-gray-700 text-white px-4 py-2">
        <Link href="/">
          <a>Główna</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;