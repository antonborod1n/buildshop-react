import './favorite.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Favorite() {
    const url = 'https://631b31adfae3df4dcff78ae8.mockapi.io/product';
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [productCounnt, setProductCounnt] = useState(0);
    const [activeProduct, setActiveProduct] = useState(0);

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


    const onClickProduct = (go) => {
        setActiveProduct(index);
    }

    return (
        !!product && (
            <section className="favorite-product">
                <div className="container">
                    <h2 className="title">Популярные товары</h2>
                    <div className="favorite-product__inner">
                        {
                            product.map((item, index) => {
                                return (
                                    <div className={activeProduct == { index } ? "favorite-product__item--active" : "favorite-product__item"} key={item.id}>
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
                                        <button className="favorite-product__btn btn" onClick={() => onClickProduct(index)}>В корзину</button>

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