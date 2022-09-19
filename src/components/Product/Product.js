import './produst.scss';

export function Product() {
    return (
        <div className={activeProduct ? "favorite-product__item--active" : "favorite-product__item"} key={item.id}>
            <img className="favorite-product__img" src={item.urlImg} alt="Product" />
            <div className="favorite-product__box">
                <p className="favorite-product__title">{item.title}</p>
                <span className="favorite-product__price">{item.price} ₽</span>
            </div>
            <div className="favorite-product__control">
                <span className="btn-count" onClick={() => setProductCounnt(productCounnt + 1)}>+</span>
                <span className="btn-count" onClick={() => setProductCounnt(productCounnt - 1)}>-</span>
                <span className="btn-count">{productCounnt}</span>
            </div>
            <button className="favorite-product__btn btn">В корзину</button>
        </div>
    )
}