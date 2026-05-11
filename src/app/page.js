"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ProductCard from "../components/ProductCard";


export default function Home() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  // LOAD PRODUCTS
  useEffect(() => {

    const savedProducts =
  JSON.parse(localStorage.getItem("products") ?? "[]");

    setProducts(savedProducts);
    console.log(savedProducts);

  }, []);

  const categories = [
    "All",
    "Rings",
    "Necklace",
    "Earrings",
    "Bracelet",
    "Bangles",
    "Pendant",
  ];

  const filteredProducts = products.filter((product) => {

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (

    <main className="bg-[#f8f5f1] min-h-screen text-black">

      {/* NAVBAR */}
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#f8f5f1]/80 border-b border-gray-200">

        <div className="flex items-center justify-between px-8 py-6">

          {/* LOGO */}
          <h1 className="text-3xl font-serif">
            Akshat Jewelry
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm">

            <a href="#" className="hover:text-gray-500">
              Home
            </a>

            <a href="#" className="hover:text-gray-500">
              Collection
            </a>

            <a href="#" className="hover:text-gray-500">
              Rings
            </a>

            <a href="#" className="hover:text-gray-500">
              Earrings
            </a>

            <a href="#" className="hover:text-gray-500">
              Contact
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden"
          >

            {menuOpen ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="md:hidden px-8 pb-6 flex flex-col gap-5 text-lg bg-[#f8f5f1]">

            <a href="#">Home</a>
            <a href="#">Collection</a>
            <a href="#">Rings</a>
            <a href="#">Earrings</a>
            <a href="#">Contact</a>

          </div>

        )}

      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center px-8 py-20 gap-14">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[6px] text-sm mb-6 text-gray-500">
            Luxury Jewelry Collection
          </p>

          <h2 className="text-6xl md:text-8xl font-serif leading-tight">
            Crafted <br /> For Elegance
          </h2>

          <p className="mt-8 text-gray-600 max-w-xl leading-8 text-lg">
            Explore timeless jewelry pieces designed
            with luxury, beauty, and sophistication
            for modern elegance.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
              Explore Collection
            </button>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition">
              New Arrivals
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
            alt="Jewelry"
            className="rounded-[40px] h-[750px] w-full object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-xl p-6 rounded-[25px] shadow-xl">

            <p className="text-sm uppercase tracking-[3px] text-gray-500">
              New Collection
            </p>

            <h3 className="text-2xl font-serif mt-2">
              Diamond Luxury Ring
            </h3>

            <button className="mt-4 bg-black text-white px-5 py-3 rounded-full text-sm">
              View Product
            </button>

          </div>

        </div>

      </section>

      {/* SEARCH + FILTER */}
      <section className="px-8 py-10">

        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-white px-6 py-4 rounded-full outline-none w-full md:w-[350px]"
          />

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`px-6 py-3 rounded-full transition ${selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white"
                  }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="px-8 py-12">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-serif">
            Featured Collection
          </h2>

          <p className="text-gray-500">
            {products.length} Products
          </p>

        </div>

        {/* IF NO PRODUCTS */}
        {products.length === 0 && (

          <div className="bg-white p-10 rounded-[30px] text-center">

            <h3 className="text-3xl font-serif">
              No Products Added
            </h3>

            <p className="text-gray-500 mt-4">
              Go to admin panel and add products.
            </p>

          </div>

        )}

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </section>

      {/* LUXURY BANNER */}
<section className="px-8 py-24">

  <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-[40px] overflow-hidden">

    <div>

      <img
        src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop"
        className="h-full w-full object-cover"
      />

    </div>

    <div className="p-10 md:p-20">

      <p className="uppercase tracking-[5px] text-sm text-gray-500">
        Editorial Luxury
      </p>

      <h2 className="text-5xl font-serif mt-6 leading-tight">
        Jewelry That Defines Your Story
      </h2>

      <p className="mt-8 text-gray-600 leading-8">
        Premium handcrafted jewelry collections
        inspired by timeless beauty and modern
        sophistication.
      </p>

      <button className="mt-10 bg-black text-white px-8 py-4 rounded-full">
        Explore More
      </button>

    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="px-8 py-20 mt-20 border-t border-gray-200">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-3xl font-serif">
              Akshat Jewelry
            </h3>

            <p className="mt-4 text-gray-500 leading-7">
              Luxury jewelry catalog crafted for timeless elegance.
            </p>

          </div>

          <div>

            <h4 className="text-xl mb-4">
              Categories
            </h4>

            <div className="flex flex-col gap-3 text-gray-500">
              <a href="#">Rings</a>
              <a href="#">Necklaces</a>
              <a href="#">Bracelets</a>
              <a href="#">Earrings</a>
            </div>

          </div>

          <div>

            <h4 className="text-xl mb-4">
              Contact
            </h4>

            <p className="text-gray-500">
              WhatsApp your luxury inquiry anytime.
            </p>

          </div>

        </div>

      </footer>

      {/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/916359943372"
  target="_blank"
  className="fixed bottom-6 right-6 bg-black text-white px-6 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition"
>
  WhatsApp
</a>

    </main>
  );
}