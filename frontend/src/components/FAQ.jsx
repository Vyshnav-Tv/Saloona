import { useState } from 'react'

const questions = [
  {
    question: 'How can I book an appointment?',
    answer: 'Give us a call, send a note, or pop by the studio. We’ll find a time that works and help you choose the right service for your hair.',
  },
  {
    question: 'Do I need to book in advance?',
    answer: 'We recommend booking ahead, especially for colour and weekend appointments. We do keep a few flexible spots for last-minute visits, so it’s always worth asking.',
  },
  {
    question: 'What hair treatments do you offer?',
    answer: 'Our menu includes nourishing scalp rituals, deep-conditioning treatments, smoothing services, and bespoke add-ons. Your stylist can recommend the right one after a quick consultation.',
  },
  {
    question: 'How long does hair colouring take?',
    answer: 'It depends on your desired result. A root refresh usually takes around 90 minutes, while a full colour or balayage can take 2–4 hours. We’ll give you a clear estimate before we begin.',
  },
  {
    question: 'Can I reschedule my appointment?',
    answer: 'Of course. Just give us at least 24 hours’ notice and we’ll happily find a new time for you. Life happens—we get it.',
  },
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0)

  return (
    <section className="faq-section section-wrap" id="faq">
      <div className="faq-intro">
        <p className="eyebrow">The little details</p>
        <h2 className="section-title">A few things<br /><em>you might wonder.</em></h2>
        <p className="body-copy">Still curious? We’re always happy to help. Give us a call or drop us a note.</p>
        <a className="text-link" href="#contact">Ask us anything <span aria-hidden="true">↗</span></a>
      </div>
      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index
          const answerId = `faq-answer-${index}`

          return (
            <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenQuestion(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span><span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
              </h3>
              <div className="faq-answer" id={answerId} hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
