import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/index";
import Contacts from "./pages/contact_page";
import Teams from "./pages/team_page";
import Products from "./pages/product_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contactt" element={<Contacts />} />
          <Route path="tim" element={<Teams />} />
          <Route path="produk" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;