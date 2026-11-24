const footerLinks = [
  ['About us', '#about'],
  ['Services', '#services'],
  ['Our work', '#gallery'],
  ['Reviews', '#reviews'],
  ['FAQs', '#faq'],
]

const footerServices = [
  ['Cuts & styling', '#services'],
  ['Colour', '#services'],
  ['Hair rituals', '#services'],
  ['Occasion hair', '#services'],
]

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main section-wrap">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="#home" aria-label="Saloona Hair Studio home">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span className="brand-name">Saloona<span>hair studio</span></span>
          </a>
          <p>Good hair, good people, and a little moment to yourself. That’s the Saloona way.</p>
          <a className="footer-email" href="mailto:hello@saloonahairstudio.com">hello@saloonahairstudio.com <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-link-column">
          <h2>Explore</h2>
          {footerLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <div className="footer-link-column">
          <h2>Our services</h2>
          {footerServices.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </div>
        <div className="footer-contact-column">
          <h2>Come on in</h2>
          <address>18 Rose Lane<br />Brooklyn, NY 11222</address>
          <a href="tel:+17185550142">(718) 555-0142</a>
          <p>Tue–Fri, 10–7<br />Sat, 9–5 · Sun–Mon, closed</p>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© {new Date().getFullYear()} Saloona Hair Studio. Made with care.</span>
        <div className="footer-socials" aria-label="Social media">
          <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
          <a href="https://www.pinterest.com/" aria-label="Pinterest">p</a>
        </div>
        <a href="#home" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
