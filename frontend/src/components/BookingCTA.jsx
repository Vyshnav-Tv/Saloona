function BookingCTA() {
  return (
    <section className="booking-section" aria-labelledby="booking-title">
      <div className="booking-image" role="img" aria-label="Warm, inviting salon interior" />
      <div className="booking-copy">
        <p className="eyebrow">Your chair is waiting</p>
        <h2 id="booking-title">Ready for your<br />new <em>favourite</em> look?</h2>
        <p>A little time for you can change the whole week. Let’s make it a good hair one.</p>
        <a className="button button-light" href="#contact">Let’s make it happen <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}

export default BookingCTA
