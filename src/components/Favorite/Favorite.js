import './favorite.scss';
import { useState } from 'react';

export function Favorite(props) {
    const product = props.favoriteList;
    const [productCounnt, setProductCounnt] = useState(0);
    const [activeProduct, setActiveProduct] = useState(0);

    /*  const onClickProduct = (go) => {
         setActiveProduct(index);
     } */

    return (
        !!product && (
            <section className="favorite-product" >
                <div className="container">
                    <h2 className="title">Популярные товары</h2>
                    <div className="favorite-product__inner">
                        {
                            product.map((item, index) => {
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
                                        <button className="favorite-product__btn btn" /* onClick={() => onClickProduct(index)} */>В корзину</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        )
    )
}