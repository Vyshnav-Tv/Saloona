const galleryImages = [
  { image: 'photo-1483985988355-763728e1935b', alt: 'Soft, natural brunette waves', label: 'Soft & lived in', shape: 'gallery-tall' },
  { image: 'photo-1529139574466-a303027c1d8b', alt: 'Glossy hair with a polished finish', label: 'A little gloss', shape: '' },
  { image: 'photo-1524504388940-b1c1722653e1', alt: 'Warm, dimensional hair colour', label: 'Golden hour colour', shape: '' },
  { image: 'photo-1512316609839-ce289d3eba0a', alt: 'A relaxed, modern haircut', label: 'The easy cut', shape: 'gallery-wide' },
]

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner section-wrap">
        <div className="section-heading gallery-heading">
          <div>
            <p className="eyebrow">A peek at the chair</p>
            <h2 className="section-title">Hair that feels<br /><em>like a fresh start.</em></h2>
          </div>
          <a className="text-link" href="#contact">Come make something <span aria-hidden="true">↗</span></a>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <figure className={`gallery-item ${item.shape}`} key={item.image}>
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`}
                alt={item.alt}
                loading="lazy"
              />
              <figcaption><span>0{index + 1}</span>{item.label}</figcaption>
            </figure>
          ))}
          <div className="gallery-note"><span>Made for you,</span><em>not the algorithm.</em><span className="gallery-note-mark">M.</span></div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
