import styles from './Product.module.scss'

export function Product(props) {
    const product = props.listProduct;

    return (
        !!product && (
            <>
                {
                    product.map((item) => {
                        return (
                            <div className="favorite-product__item" key={item.id}>
                                <img className="favorite-product__img" src={item.urlImg} alt="Product" />
                                <div className="favorite-product__box">
                                    <p className="favorite-product__title">{item.title}</p>
                                    <span className="favorite-product__price">{item.price} ₽</span>
                                </div>
                                <button className="favorite-product__btn btn">В корзину</button>
                            </div>
                        )
                    })
                }
            </>
        )
    )
}