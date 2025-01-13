import { useState } from "react";
import { navLinks } from "../constants/index.js";

const NavItems = () => {
  return (
    <ul className={`nav-ul`}>
      {navLinks.map(({ href, id, name }) => (
        <li key={id} className={`nav-li`}>
          <a href={href} className={`nav-li_a`}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className={`w-full mx-auto`}>
          <div
            className={`flex justify-between items-center mx-auto py-5 c-space`}
          >
            <a
              href="/"
              className={`text-neutral-400 font-bold text-xl hover:text-white transition-colors `}
            >
              Pratham
            </a>
            <button
              onClick={() => toggle()}
              className={`text-neutral-400 hover:text-white focus:outline-none sm:hidden flex`}
              aria-label={`toggle menu`}
            >
              <img
                className={`h-5 w-5`}
                src={`/assets/${isOpen ? "close.svg" : "menu.svg"}`}
                alt="toggle"
              />
            </button>

            <nav className={`sm:flex hidden`}>
              <NavItems />
            </nav>
          </div>
          <div
            className={`nav-sidebar bg-white ${isOpen ? "max-h-screen" : "max-h-0"}`}
          >
            <nav className={`p-5`}>
              <NavItems />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
