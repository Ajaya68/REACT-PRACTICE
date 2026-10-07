function ProductCard({ pName, price, imageUrl, rating, brand }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={pName} />
      <h2>{pName}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: {rating}</p>
      <p>Brand: {brand}</p>
    </div>
  );
}

export default ProductCard;
