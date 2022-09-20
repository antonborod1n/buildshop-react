import { Banner } from '../components/Banner/Banner';
import { Stock } from '../components/Stock/Stock';
import { Popular } from '../components/Popular/Popular';
import { Favorite } from '../components/Favorite/Favorite';
import { Brands } from '../components/Brands/Brands';
import { Reviews } from '../components/Reviews/Reviews';
import { About } from '../components/About/About';

import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
    const urlReviews = 'https://631b31adfae3df4dcff78ae8.mockapi.io/reviews';
    const urlStock = 'https://631b31adfae3df4dcff78ae8.mockapi.io/stock';
    const urlCategory = 'https://631b31adfae3df4dcff78ae8.mockapi.io/category';
    const urlFavoriteProduct = 'https://631b31adfae3df4dcff78ae8.mockapi.io/product';

    const [reviews, setReviews] = useState(null);
    const [stockProduct, setStockProduct] = useState(null);
    const [category, setCategory] = useState(null);
    const [favoriteProduct, setFavoriteProduct] = useState(null);

    useEffect(() => {
        axios.get(urlFavoriteProduct)
            .then(
                res => setFavoriteProduct(res.data)
            )
    }, []);

    useEffect(() => {
        axios.get(urlCategory)
            .then(
                res => setCategory(res.data)
            )
    }, []);

    useEffect(() => {
        fetch(urlStock)
            .then(res => res.json()
            )
            .then(data => setStockProduct(data)
            )
    }, []);

    useEffect(() => {
        axios.get(urlReviews).then(
            res => setReviews(res.data)
        )
    })
    return (
        <>
            <Banner />
            <Stock stockList={stockProduct} />
            <Popular popularList={category} />
            <Favorite favoriteList={favoriteProduct} />
            <Brands />
            <Reviews reviewsList={reviews} />
            <About />
        </>
    )
}


