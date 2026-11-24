function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-photo-wrap">
        <img
          className="about-photo"
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
          alt="Stylist carefully shaping a client's hair in the salon"
          loading="lazy"
        />
        <div className="about-photo-note"><span>Good hair,</span><em>good energy.</em></div>
        <div className="experience-stamp"><strong>12</strong><span>years of<br />good hair</span></div>
      </div>
      <div className="about-copy">
        <p className="eyebrow">A little about us</p>
        <h2 className="section-title">A good hair day<br />should feel like <em>you.</em></h2>
        <p className="body-copy">
          Saloona is a small, independent salon with a simple belief: the best hair
          is the hair that feels like yours. We take the time to listen, get to know
          your texture, and make a plan that fits your life—not just your Pinterest board.
        </p>
        <p className="body-copy">
          Our close-knit team of thoughtful stylists brings a light touch, a good eye,
          and a lot of heart to every appointment. No rush, no hard sell. Just really
          good hair, and a cup of something warm while you’re here.
        </p>
        <a className="text-link" href="#contact">Get to know the studio <span aria-hidden="true">↗</span></a>
        <div className="about-stats">
          <div><strong>4.9<span>/5</span></strong><small>Guest rating</small></div>
          <div><strong>2.4k<span>+</span></strong><small>Happy hair days</small></div>
        </div>
      </div>
    </section>
  )
}

export default About
