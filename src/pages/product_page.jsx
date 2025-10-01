import Footer from "../component/footer";
import Header from "../component/header";
import Product from "../component/productlist";
import BookCollection from "../component/bookcollection";

export default function Products() {
    return (
        <>
            <Header />
            <Product />
            <BookCollection/>
            <Footer />
        </>
    )
}