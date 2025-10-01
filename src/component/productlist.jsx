import React from 'react'


function Product() {
  return (
    <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-muted">
                Koleksi buku paling populer yang wajib kamu baca tahun ini.
              </p>
            </div>
          </div>
           <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/81YkqyaFVEL.jpg" className="card-img-top" alt="Atomic Habits" />
                  <div className="card-body">
                    <h5 className="card-title">Atomic Habits</h5>
                    <p className="card-text">James Clear – Panduan membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp120.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" className="card-img-top" alt="Rich Dad Poor Dad" />
                  <div className="card-body">
                    <h5 className="card-title">Rich Dad Poor Dad</h5>
                    <p className="card-text">Robert T. Kiyosaki – Belajar keuangan pribadi dari dua sosok ayah.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp95.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/71g2ednj0JL.jpg" className="card-img-top" alt="The Psychology of Money" />
                  <div className="card-body">
                    <h5 className="card-title">The Psychology of Money</h5>
                    <p className="card-text">Morgan Housel – Mengungkap perilaku manusia di balik uang dan investasi.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp110.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" className="card-img-top" alt="Ikigai" />
                  <div className="card-body">
                    <h5 className="card-title">Ikigai</h5>
                    <p className="card-text">Hector Garcia & Francesc Miralles – Rahasia panjang umur dan hidup bahagia ala Jepang.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp85.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/1011/300/200" className="card-img-top" alt="Book 5" />
                  <div className="card-body">
                    <h5 className="card-title">Deep Work</h5>
                    <p className="card-text">
                      Cal Newport – Strategi untuk fokus mendalam agar lebih produktif di era distraksi.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-primary">Buy</button>
                      </div>
                      <small className="text-body-secondary">Rp150.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://picsum.photos/id/1015/300/200" className="card-img-top" alt="Book 6" />
                  <div className="card-body">
                    <h5 className="card-title">The Subtle Art of Not Giving a F*ck</h5>
                    <p className="card-text">
                      Mark Manson – Panduan hidup dengan memilih hal yang benar-benar penting.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-primary">Buy</button>
                      </div>
                      <small className="text-body-secondary">Rp130.000</small>
                    </div>
                  </div>
                </div>
              </div>


              {/* Card 7 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/81OthjkJBuL.jpg" className="card-img-top" alt="Sophie's World" />
                  <div className="card-body">
                    <h5 className="card-title">Dunia Sophie</h5>
                    <p className="card-text">Jostein Gaarder – Novel filsafat yang ringan dan penuh makna.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp90.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg" className="card-img-top" alt="The Subtle Art of Not Giving a F*ck" />
                  <div className="card-body">
                    <h5 className="card-title">The Subtle Art of Not Giving a F*ck</h5>
                    <p className="card-text">Mark Manson – Cara hidup lebih fokus pada hal penting.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp130.000</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img src="https://m.media-amazon.com/images/I/81WojUxbbFL.jpg" className="card-img-top" alt="Educated" />
                  <div className="card-body">
                    <h5 className="card-title">Educated</h5>
                    <p className="card-text">Tara Westover – Memoar inspiratif perjuangan meraih pendidikan.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-secondary">View</button>
                        <button className="btn btn-sm btn-outline-secondary">Buy</button>
                      </div>
                      <small className="text-muted">Rp125.000</small>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>
    

  )
}

export default Product