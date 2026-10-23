import React, { useState } from 'react';
import './App.css';

function App() {
  // Sample initial products for Ethiopian Market (EthioMart)
  const [products] = useState([
    { id: 1, name: "የይርጋጨፌ ታጠበ ቡና (1KG)", price: 850, category: "coffee", region: "Yirgacheffe", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500" },
    { id: 2, name: "ባህላዊ የሀበሻ ቀሚስ", price: 4500, category: "clothes", region: "Addis Ababa", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
    { id: 3, name: "የእንጨት እደ-ጥበብ ምስል", price: 1200, category: "crafts", region: "Jimma", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500" },
    { id: 4, name: "የጅማ ኦርጋኒክ ቡና", price: 750, category: "coffee", region: "Jimma", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500" }
  ]);

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products based on search input
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Navigation Bar */}
      <header className="navbar">
        <h2>Ethio<span>Mart</span> Multi-Vendor</h2>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="ምርቶችን ይፈልጉ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="cart-badge">
          🛒 Cart: <b>{cart.length}</b>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <h3>የሀገር ውስጥ ምርቶችና አቅራቢዎች</h3>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="region">📍 ቦታ: {product.region}</p>
              <p className="price">{product.price} ETB</p>
              <button onClick={() => addToCart(product)}>ወደ Cart ጨምር</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
