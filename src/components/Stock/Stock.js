import './stock.scss';

export function Stock(props) {
    const product = props.stockList;

    return (
        !!product && (
            <section className="stock">
                <div className="stock__top">
                    <h2 className="title">Акции</h2>
                    <a className="top-btn" href="#">Все акции</a>
                </div>
                <div className="stock__content">
                    {
                        product.map((item) => {
                            return (
                                <div className="stock__item" key={item.id}>
                                    <img className="stock__img" src={item.urlImg} alt="Product" />
                                    <img className="stock__discount" src={item.sale ? "./images/icons/discount.jpg" : "#"} alt="Discount" />
                                    <div className="stock__box">
                                        <p className="stock__title">{item.title}</p>
                                        <div className="stock__price-box">
                                            <span className="stock__price">{item.price} ₽</span>
                                            <span className="stock__price-old">{item.priceOld} ₽</span>
                                        </div>
                                        <button className="stock__btn btn">В корзину</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    )
}