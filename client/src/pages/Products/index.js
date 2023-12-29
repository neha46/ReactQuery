import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [limit] = useState(4);
  const [skip, setSkip] = useState(0);
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await fetch("https://dummyjson.com/products/categories").then(
        (res) => res.json()
      );
    },
  });

  const fetchProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    ).then(res => res.json())
    return data.products;
  };

  const {
    loading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: fetchProducts,
    // staleTime: 10000,
  });
  if (loading) {
    return <h3>Loading...</h3>;
  }
  const handleMove = (moveCount) => {
    setSkip((prevSkip) => {
      return Math.max(prevSkip + moveCount, 0);
    });
  };
if(error){
  return <h3>{error.message}</h3>
}
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl p-4 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="relative mt-2 rounded-md flex items-center gap-8 mb-4">
          <input
            onChange={() => {}}
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="IPhone"
          />
          <select className="border p-2" onChange={() => {}}>
            <option>Select category</option>
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-12">
          <button
            className="bg-purple-500 px-4 py-1 text-white rounded"
            onClick={() => {
              handleMove(-limit);
            }}
          >
            Prev
          </button>
          <button
            className="bg-purple-500 px-4 py-1 text-white rounded"
            onClick={() => {
              handleMove(limit);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
