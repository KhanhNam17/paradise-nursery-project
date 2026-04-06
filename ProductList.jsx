import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Đường dẫn có thể khác tùy thư mục của bạn
import './ProductList.css'; // Nếu có file CSS

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  // Giả sử bạn có mảng danh sách cây ở đây
  const plantsArray = [
    { name: "Snake Plant", cost: "$15", image: "url_anh_1", category: "Air Purifying" },
    // ... thêm các cây khác để đủ 3 danh mục, mỗi danh mục 6 cây
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true, // Đánh dấu cây này đã được thêm
    }));
  };

  return (
    <div className="product-list-container">
      {/* NAVBAR NẰM Ở ĐÂY */}
      
      <div className="product-grid">
        {plantsArray.map((plant, index) => (
          <div className="product-card" key={index}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.cost}</p>
            
            {/* ĐOẠN CODE BẠN VỪA GỬI ĐƯỢC ĐẶT Ở ĐÂY */}
            <button 
              className="product-button" 
              disabled={addedToCart[plant.name]} 
              onClick={() => handleAddToCart(plant)}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
