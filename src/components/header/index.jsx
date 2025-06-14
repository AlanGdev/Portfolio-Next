import Link from 'next/link';
import { LoginButton } from '../loginButton';
import { ThemeSwitcher } from '../themeSwitcher';
import { VT323 } from 'next/font/google';
import { Restart } from '../restart';

export default function Header() {
  return (
    <header className="bg-base-200 sticky top-0 z-50 font-stretch-125% shadow-md">
      <nav className="navbar bg-base-200 mb shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              aria-label="Menu burger"
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/#projets">Projets</Link>
              </li>

              <li>
                <Link href="/#a-propos">À propos</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Restart />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/#a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/#projets">Projets</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeSwitcher />
          <LoginButton />
        </div>
      </nav>
    </header>
  );
}
