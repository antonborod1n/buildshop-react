import { Breadcrumbs } from "../components/Breadcrumbs";

export function Order() {
    return (
        <section className="cart">
            <div className="cart__top" style={{ backgroundImage: "url(../images/order-baner.jpg)" }}>
                <div className="cart__top-box">
                    <Breadcrumbs />
                    <h1 className="cart__title title">Заказы</h1>
                </div>
            </div>
            <div className="cart__product-item">
                <img src="./images/cart/product-1.jpg" alt="car" />
                <div className="cart__product-box">
                    <div className="cart__product-title">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</div>
                    <div className="cart__product-price">449 ₽</div>
                    <div className="cart__product-addproduct">
                        <span className="cart__product-count cart__product-add">-</span>
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
                        <span className="cart__product-count cart__product-add">-</span>
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
                        <span className="cart__product-count cart__product-add">-</span>
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
        </section>
    )
}