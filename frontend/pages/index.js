import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Menu Food & Drink</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow border p-4">
            {product.image ? (
              <img src={product.image} className="w-full h-40 object-cover mb-2 rounded" alt={product.name} />
            ) : (
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded mb-2 text-gray-400">No image</div>
            )}
            <div className="font-bold text-lg">{product.name}</div>
            <div className="text-sm text-gray-500">{product.description}</div>
            <div className="text-green-600 font-semibold mt-1">{product.price} đ</div>
          </div>
        ))}
      </div>
    </div>
  );
}