import { Breadcrumbs } from "../components/Breadcrumbs";
import { Sort } from "../components/Sort/Sort";

export const Catalog = () => {

    return (
        <section className="catalog">
            <Breadcrumbs />
            <h2 className="title">Сухие смеси</h2>
            <div className="catalog__inner">
                <div className="filter">

                </div>
                <div className="catalog__content">
                    <Sort />
                    <div className="catalog__product">
                        <div className="favorite-product__item">
                            <img className="favorite-product__img" src="../images/product/1.jpg" alt="Product" />
                            <div className="favorite-product__box">
                                <p className="favorite-product__title">
                                    Керамогранит Yasmin 598х185 коричневый C-YA4M112D
                                </p>
                                <span className="favorite-product__price">899 ₽</span>
                            </div>
                            <button className="favorite-product__btn">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}