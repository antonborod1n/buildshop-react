import { Breadcrumbs } from "../components/Breadcrumbs";
import { Product } from "../components/Product";
import { Sort } from "../components/Sort/Sort";
import { Pagination } from "../components/Pagination";

import { useState, useEffect } from 'react';
import axios from 'axios';

export const Category = () => {
    const urlFavoriteProduct = 'https://631b31adfae3df4dcff78ae8.mockapi.io/product';
    const [favoriteProduct, setFavoriteProduct] = useState(null);

    useEffect(() => {
        axios.get(urlFavoriteProduct)
            .then(
                res => setFavoriteProduct(res.data)
            )
    }, []);

    return (
        <section className="category">
            <Breadcrumbs />
            <h2 className="title">Сухие смеси</h2>
            <div className="category__inner">
                <div className="filter">

                </div>
                <div className="category__content">
                    <Sort />
                    <div className="category__product">
                        <Product listProduct={favoriteProduct} />
                    </div>
                    <Pagination />
                </div>
            </div>
        </section>
    )
}