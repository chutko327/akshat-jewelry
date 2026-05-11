"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  // LOAD PRODUCTS
  useEffect(() => {

    const savedProducts =
  JSON.parse(localStorage.getItem("products") || "[]");

    setProducts(savedProducts);

  }, []);

  // SAVE PRODUCTS
  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);

  // ADD PRODUCT
  const addProduct = () => {

    if (
      !form.name ||
      !form.category ||
      !form.price ||
      !form.image
    ) {
      alert("Fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...form,
    };

    setProducts([newProduct, ...products]);

    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
    });
  };

  // DELETE PRODUCT
  const deleteProduct = (id) => {

    const updated =
      products.filter((item) => item.id !== id);

    setProducts(updated);
  };

  return (
    <main className="min-h-screen bg-[#f8f5f1] p-8">

      <h1 className="text-5xl font-serif mb-10">
        Admin Panel
      </h1>

      {/* FORM */}
      <div className="bg-white p-8 rounded-[30px] mb-12">

        <h2 className="text-3xl font-serif mb-8">
          Add Product
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) =>
              setForm({
                ...form,
                image: e.target.value,
              })
            }
            className="border p-4 rounded-xl"
          />

        </div>

        <button
          onClick={addProduct}
          className="mt-8 bg-black text-white px-8 py-4 rounded-full"
        >
          Add Product
        </button>

      </div>

      {/* PRODUCT LIST */}
      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white p-5 rounded-[30px]"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-[300px] w-full object-cover rounded-[20px]"
            />

            <h3 className="text-2xl font-serif mt-5">
              {product.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {product.category}
            </p>

            <p className="mt-3 text-lg">
              {product.price}
            </p>

            <button
              onClick={() => deleteProduct(product.id)}
              className="mt-5 bg-red-500 text-white px-5 py-3 rounded-full"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}