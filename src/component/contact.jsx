import React from 'react'

function Contact() {
  return (
    <section id="contact" className="container py-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="col-md-6 mx-auto">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="3" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </section>
  )
}

export default Contact