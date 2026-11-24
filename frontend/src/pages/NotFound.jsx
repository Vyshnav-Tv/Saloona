import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <span className="not-found-mark" aria-hidden="true">S</span>
      <p className="eyebrow">A little detour</p>
      <h1>Looks like this page<br /><em>needs a trim.</em></h1>
      <p className="body-copy">We can’t find the page you’re looking for. Let’s get you back to the good hair.</p>
      <Link className="button button-dark" to="/">Back to Saloona <span aria-hidden="true">↗</span></Link>
    </main>
  )
}

export default NotFound
