import Link from "next/link";

export default function ProductCard({ product }) {

  return (

    <Link href={`/product/${product.id}`}>

      <div className="group bg-white rounded-[30px] p-5 overflow-hidden hover:-translate-y-2 transition duration-500 cursor-pointer shadow-sm hover:shadow-2xl">

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[20px]">

          <img
            src={product.image}
            alt={product.name}
            className="rounded-[20px] h-[320px] w-full object-cover group-hover:scale-110 transition duration-700"
          />

        </div>

        {/* CONTENT */}
        <div className="mt-5">

          <p className="text-sm text-gray-500 uppercase tracking-[3px]">
            {product.category}
          </p>

          <h3 className="text-2xl font-serif mt-2">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mt-5">

            <p className="text-lg">
              {product.price}
            </p>

            <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition">
              View
            </button>

          </div>

        </div>

      </div>

    </Link>
  );
}