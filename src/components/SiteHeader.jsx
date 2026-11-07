import { useState } from "react";
import { navigation, profile } from "../data/portfolio";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#hero" onClick={closeMenu}>
          <span className="brand__copy">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role">{profile.role}</span>
          </span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Primary navigation"
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              <span>{item.number}/</span>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-action"
          href="/gouiss_resume.pdf"
          download="gouiss_zakaria_resume.pdf"
        >
          <span>Resume.pdf</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
