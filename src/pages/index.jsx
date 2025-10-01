import Header from "../component/header";
import Hero from "../component/hero";
import Footer from "../component/footer";
import BookCollection from "../component/bookcollection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BookCollection /> {/* Koleksi Buku dari utils */}
      <Footer />
    </>
  );
}
