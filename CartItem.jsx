const handleIncrement = (item) => {
  dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
};

const handleDecrement = (item) => {
  if (item.quantity > 1) {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  } else {
    dispatch(removeItem(item.name));
  }
};
