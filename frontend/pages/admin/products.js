import { useEffect, useState } from 'react';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    });
    const newProduct = await res.json();
    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Quản lý sản phẩm (Admin)</h2>
      <form className="flex gap-2 mb-4" onSubmit={handleAdd}>
        <input
          placeholder="Tên món"
          className="border p-2 rounded flex-1"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          placeholder="Giá"
          type="number"
          min="0"
          className="border p-2 rounded w-32"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 rounded" type="submit">Thêm</button>
      </form>
      <ul>
        {products.map(p => (
          <li key={p._id} className="py-1">
            {p.name} - {p.price} đ
          </li>
        ))}
      </ul>
    </div>
  );
}