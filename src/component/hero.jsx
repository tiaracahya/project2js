import React from 'react'

function Hero() {
  return (
     <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
                Welcome to Bookstore
              </h1>
              <p className="lead">
                Temukan berbagai koleksi buku best seller, novel inspiratif, hingga buku pengembangan diri yang akan menemani perjalanan hidupmu.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Shop Now
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Explore
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                alt="Bookstore Hero"
                width="100%"
              />
            </div>
          </div>
        </div>
  )
}

export default Hero