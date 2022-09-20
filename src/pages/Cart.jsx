import { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs"

export const Cart = () => {
    const [productCounnt, setProductCounnt] = useState(0);
    return (

        <section className="cart">
            <div className="cart__top" style={{ backgroundImage: "url(../images/cart-bg.jpg)" }}>
                <div className="cart__top-box">
                    <Breadcrumbs />
                    <h1 className="cart__title title">Корзина</h1>
                </div>
            </div>
            <div className="cart__content">
                <div className="cart__order">
                    <ul className="cart__order-list">
                        <li className="cart__order-item-title">Итого
                        </li>
                        <li className="cart__order-item">Количество товара
                            <span className="cart__order-items">3 шт.
                            </span>
                        </li>
                        <li className="cart__order-item">Товаров на сумму
                            <span className="cart__order-items">3 160 ₽
                            </span>
                        </li>
                        <li className="cart__order-item">Поставщик
                            <span className="cart__order-items">Аксон
                            </span>
                        </li>
                    </ul>
                    <button className="cart__order-btn btn">Оформить заказ</button>
                    <div className="cart__info">
                        <p className="cart__info-text">
                            <img className="cart__info-img" src="./images/icons/cart-info.svg" alt="info" />
                            Можно сделать заказ только от одного поставщика
                        </p>
                        <p className="cart__info-text">
                            <img className="cart__info-img" src="./images/icons/cart-car.svg" alt="car" />
                            Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика
                        </p>
                        <p className="cart__info-text">
                            <img className="cart__info-img" src="./images/icons/cart-box.svg" alt="box" />
                            Точная сумма доставки будет определена после после подтверждения заказа
                        </p>
                    </div>
                </div>

                <div className="cart__product">
                    <div className="cart__product-item">
                        <img src="./images/cart/product-1.jpg" alt="car" />
                        <div className="cart__product-box">
                            <div className="cart__product-title">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</div>
                            <div className="cart__product-price">449 ₽</div>
                            <div className="cart__product-addproduct">
                                <span className="cart__product-plus cart__product-add" onClick={() => setProductCounnt(productCounnt + 1)}>-</span>
                                <span className="cart__product-count cart__product-add">{productCounnt}</span>
                                <span className="cart__product-minus cart__product-add" onClick={() => setProductCounnt(productCounnt - 1)}>+</span>
                            </div>
                        </div>
                        <div className="cart__product-control">
                            <div className="cart__product-control-box">
                                <span className="cart__product-code">Код товара:</span>
                                <span className="cart__product-code-name">34078988-0047</span>
                            </div>
                            <button className="cart__product-btn btn">Удалить товар</button>
                        </div>
                    </div>
                    <div className="cart__product-item">
                        <img src="./images/cart/product-1.jpg" alt="car" />
                        <div className="cart__product-box">
                            <div className="cart__product-title">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</div>
                            <div className="cart__product-price">449 ₽</div>
                            <div className="cart__product-addproduct">
                                <span className="cart__product-plus cart__product-add" onClick={() => setProductCounnt(productCounnt + 1)}>+</span>
                                <span className="cart__product-count cart__product-add">{productCounnt}</span>
                                <span className="cart__product-minus cart__product-add" onClick={() => setProductCounnt(productCounnt - 1)}>-</span>
                            </div>
                        </div>
                        <div className="cart__product-control">
                            <div className="cart__product-control-box">
                                <span className="cart__product-code">Код товара:</span>
                                <span className="cart__product-code-name">34078988-0047</span>
                            </div>
                            <button className="cart__product-btn btn">Удалить товар</button>
                        </div>
                    </div>
                    <div className="cart__product-item">
                        <img src="./images/cart/product-1.jpg" alt="car" />
                        <div className="cart__product-box">
                            <div className="cart__product-title">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</div>
                            <div className="cart__product-price">449 ₽</div>
                            <div className="cart__product-addproduct">
                                <span className="cart__product-plus cart__product-add" onClick={() => setProductCounnt(productCounnt + 1)}>+</span>
                                <span className="cart__product-count cart__product-add">{productCounnt}</span>
                                <span className="cart__product-minus cart__product-add" onClick={() => setProductCounnt(productCounnt - 1)}>-</span>
                            </div>
                        </div>
                        <div className="cart__product-control">
                            <div className="cart__product-control-box">
                                <span className="cart__product-code">Код товара:</span>
                                <span className="cart__product-code-name">34078988-0047</span>
                            </div>
                            <button className="cart__product-btn btn">Удалить товар</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}