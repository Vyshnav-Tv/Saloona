function Banner() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span /> Your neighbourhood hair studio</p>
        <h1 id="hero-title">Your hair,<br />beautifully <em>you.</em></h1>
        <p className="hero-description">
          Thoughtful cuts, lived-in colour, and a little time just for you.
          Come as you are; leave feeling like yourself, only more so.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#contact">Book your appointment <span aria-hidden="true">↗</span></a>
          <a className="text-link hero-secondary" href="#services">Explore our services <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-footnote">
          <span className="hero-stars" aria-label="5 out of 5 stars">★★★★★</span>
          <span>Independent studio · Loved by locals</span>
        </div>
      </div>
      <div className="hero-image" role="img" aria-label="Sunlit portrait of a woman with softly styled hair">
        <div className="hero-image-caption"><span>01 / 04</span><span>Find your new favourite</span></div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to discover"><span /> Scroll to discover</a>
    </section>
  )
}

export default Banner
