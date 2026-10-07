import ProductCard from "./ProductCard";
function ProductList() {
  const productDetails = [
    {
      pName: "Wireless Mouse",
      price: 1299,
      imageUrl: "https://placehold.co/300x200?text=Wireless+Mouse",
      rating: 4.5,
      brand: "Logitech",
    },
    {
      pName: "Mechanical Keyboard",
      price: 5499,
      imageUrl: "https://placehold.co/300x200?text=Mechanical+Keyboard",
      rating: 4.7,
      brand: "Keychron",
    },
    {
      pName: "USB-C Hub",
      price: 2199,
      imageUrl: "https://placehold.co/300x200?text=USB-C+Hub",
      rating: 4.2,
      brand: "Anker",
    },
    {
      pName: "Laptop Stand",
      price: 899,
      imageUrl: "https://placehold.co/300x200?text=Laptop+Stand",
      rating: 4.0,
      brand: "Portronics",
    },
  ];
  return (
    <div>
      <h2 id="today-deal">Today's Deals</h2>
      <div className="product-list">
        {productDetails.map((product) => (
          <ProductCard
            pName={product.pName}
            price={product.price}
            imageUrl={product.imageUrl}
            rating={product.rating}
            brand={product.brand}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
