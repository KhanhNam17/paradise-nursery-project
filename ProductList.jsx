// Trong hàm render của từng sản phẩm:
<button 
  className="product-button" 
  disabled={addedToCart[plant.name]} 
  onClick={() => handleAddToCart(plant)}
>
  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
</button>
