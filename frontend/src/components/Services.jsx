const services = [
  {
    number: '01',
    name: 'Cuts & styling',
    description: 'A considered cut that works with your hair, your face, and your everyday.',
    price: 'from $65',
    image: 'photo-1560869713-7d0a29430803',
    alt: 'Long glossy hair styled in soft waves',
  },
  {
    number: '02',
    name: 'Colour',
    description: 'Dimensional, seamless colour that grows out beautifully and feels like you.',
    price: 'from $120',
    image: 'photo-1524504388940-b1c1722653e1',
    alt: 'Natural brunette hair with warm dimensional tones',
  },
  {
    number: '03',
    name: 'Hair rituals',
    description: 'A restorative scalp and hair treatment to bring back your natural shine.',
    price: 'from $55',
    image: 'photo-1519699047748-de8e457a634e',
    alt: 'Woman enjoying a relaxing salon hair treatment',
  },
  {
    number: '04',
    name: 'Smooth & shine',
    description: 'Frizz-softening treatments for touchable, easy-to-style hair.',
    price: 'from $180',
    image: 'photo-1534528741775-53994a69daeb',
    alt: 'Portrait showcasing smooth, healthy hair',
  },
  {
    number: '05',
    name: 'Occasion hair',
    description: 'Effortless updos and soft finishes for your most meaningful moments.',
    price: 'from $95',
    image: 'photo-1529139574466-a303027c1d8b',
    alt: 'Elegant occasion hairstyle with softly pinned hair',
  },
  {
    number: '06',
    name: 'Length & volume',
    description: 'Beautifully blended extensions, matched and placed with intention.',
    price: 'consultation',
    image: 'photo-1508214751196-bcfd4ca60f91',
    alt: 'Woman with long, voluminous hair',
  },
]

function Services() {
  return (
    <section className="services-section section-wrap" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The good hair menu</p>
          <h2 className="section-title">A little something<br /><em>for every you.</em></h2>
        </div>
        <p className="body-copy section-heading-note">
          Thoughtful services, tailored to you. Every appointment starts with a
          proper conversation, so we can make sure you leave feeling your best.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <a className="service-image-link" href="#contact" aria-label={`Ask us about ${service.name}`}>
              <img
                src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=750&q=80`}
                alt={service.alt}
                loading="lazy"
              />
              <span className="service-number">{service.number}</span>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="service-details">
              <div className="service-title-row"><h3>{service.name}</h3><span>{service.price}</span></div>
              <p>{service.description}</p>
              <a className="text-link" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
