const Product = (props) => {
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
};

export default Product;