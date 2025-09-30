import React from 'react'

function Team() {
  return (
    <section id="team" className="container py-5">
          <h2 className="text-center mb-4">Our Team</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card team-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="card-img-top" alt="Team 1" />
                <div className="card-body">
                  <h5 className="card-title">Rachel</h5>
                  <p className="card-text">CEO & Founder – Membangun Bookstore sebagai ruang inspirasi literasi modern.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card team-card">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" className="card-img-top" alt="Team 2" />
                <div className="card-body">
                  <h5 className="card-title">Haikal</h5>
                  <p className="card-text">Head of Marketing – Menghubungkan buku-buku hebat dengan para pembaca setia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card team-card">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="card-img-top" alt="Team 3" />
                <div className="card-body">
                  <h5 className="card-title">aysix</h5>
                  <p className="card-text">Chief Editor – Memastikan setiap buku terbaik sampai ke rak Bookstore.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Team