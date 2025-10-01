import books from "../utils/books";

export default function BookCollection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-light text-center mb-4">Koleksi Buku</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {books.map((book) => (
            <div key={book.id} className="col">
              <div className="card shadow-sm">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <small className="text-muted">{book.author} ({book.year})</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
