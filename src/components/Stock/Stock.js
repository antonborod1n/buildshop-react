import './stock.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Stock() {
    const url = 'https://631b31adfae3df4dcff78ae8.mockapi.io/stock';
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        /* fetch(url)
            .then(res => res.json()
            )
            .then(data => setProduct(data)
            ) */
        axios.get(url)
            .then(
                res => setProduct(res.data)
            )
            .catch(
                setError(error)
            )
    }, []);

    return (
        !!product && (
            <section className="stock">
                <div className="container">
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
                                        <img className="stock__discount" src="../images/icons/discount.jpg" alt="Discount" />
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
                </div>
            </section>
        )
    )
}