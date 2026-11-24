const reviews = [
  {
    quote: 'I came in with a vague idea and left with the best cut I’ve had in years. It feels so like me. Also, the head massage? Life changing.',
    name: 'Sophie M.',
    detail: 'Cut & style · 2 weeks ago',
    image: 'photo-1534528741775-53994a69daeb',
    alt: 'Portrait of salon guest Sophie',
  },
  {
    quote: 'Finally, colour that grows out beautifully. The whole appointment felt calm and personal—like catching up with a friend who happens to be a genius.',
    name: 'Clara R.',
    detail: 'Colour · 1 month ago',
    image: 'photo-1524504388940-b1c1722653e1',
    alt: 'Portrait of salon guest Clara',
  },
  {
    quote: 'Such a lovely little space and such lovely people. I walked in feeling a bit blah and walked out feeling like the main character.',
    name: 'Jamie L.',
    detail: 'Cut & style · 3 weeks ago',
    image: 'photo-1508214751196-bcfd4ca60f91',
    alt: 'Portrait of salon guest Jamie',
  },
]

function Reviews() {
  return (
    <section className="reviews-section section-wrap" id="reviews">
      <div className="reviews-intro">
        <p className="eyebrow">Don’t just take our word</p>
        <h2 className="section-title">Nice words from<br /><em>nice people.</em></h2>
        <div className="review-rating">
          <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
          <strong>4.9</strong><span>from 320+ reviews</span>
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <span className="review-quote-mark" aria-hidden="true">“</span>
            <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>{review.quote}</blockquote>
            <div className="review-author">
              <img src={`https://images.unsplash.com/${review.image}?auto=format&fit=crop&w=120&h=120&q=80`} alt={review.alt} loading="lazy" />
              <div><strong>{review.name}</strong><span>{review.detail}</span></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
