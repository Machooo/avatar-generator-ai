import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__content">
          <Link href="/" className="header__logo">
            AG
          </Link>
          <nav className="header__navigation">
            <Link href="/">Home</Link>
            <Link href="/user">User</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
