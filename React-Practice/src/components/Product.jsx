function Product({ title, imgUrl, price }) {   // destructure props correctly
  return (
    <div className="border border-warning m-3 p-3 w-25 text-center">
      <img src={imgUrl} alt={title} className="w-100"/>
      <h5>{title}</h5>
      <p>Price: ₹{price}</p>
    </div>
  );
}
export default Product;