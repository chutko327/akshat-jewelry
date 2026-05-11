import products from "../../../data/products";

export default function ProductDetails({ params }) {

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  const whatsappMessage =
    `Hello, I am interested in ${product.name}`;

  return (
    <main className="min-h-screen bg-[#f8f5f1] px-8 py-16">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[700px] object-cover rounded-[30px]"
          />

        </div>

        <div>

          <p className="text-gray-500 text-lg">
            {product.category}
          </p>

          <h1 className="text-5xl font-serif mt-4">
            {product.name}
          </h1>

          <p className="text-3xl mt-6">
            {product.price}
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            Premium handcrafted jewelry designed
            for timeless luxury and elegance.
          </p>

          <a
            href={`https://wa.me/916359943372?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-full"
          >
            WhatsApp Inquiry
          </a>

        </div>

      </div>

    </main>
  );
}