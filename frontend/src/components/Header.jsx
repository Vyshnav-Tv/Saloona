import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Our work', '#gallery'],
  ['Kind words', '#reviews'],
  ['Contact', '#contact'],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Saloona Hair Studio home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">S</span>
        <span className="brand-name">Saloona<span>hair studio</span></span>
      </a>

      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`main-nav${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a className="button button-dark nav-booking" href="#contact" onClick={closeMenu}>
          Book a visit <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
