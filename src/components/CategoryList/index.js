import { useState, useEffect } from "react";
import axios from "axios";

export const CategoryList = () => {
    const urlCategory = 'https://631b31adfae3df4dcff78ae8.mockapi.io/category';
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(urlCategory)
            .then(
                res => setCategory(res.data)
            )
    }, []);

    return (
        <>
            {
                category.map(item => {
                    return (
                        <div className="catalog__item" key={item.id}>
                            <p className="catalog__title">{item.title}</p>
                            <img className="catalog__img" src={item.urlImg} alt="Category" />
                            <ul className="catalog__list">
                                <li className="catalog__list-item">{item.subCategory1}</li>
                                <li className="catalog__list-item">{item.subCategory2}</li>
                                <li className="catalog__list-item">{item.subCategory3}</li>
                                <li className="catalog__list-item">{item.subCategory4}</li>
                                <li className="catalog__list-item">{item.subCategory5}</li>
                                <li className="catalog__list-item">{item.subCategory6}</li>
                                <li className="catalog__list-item">{item.subCategory7}</li>
                                <li className="catalog__list-item">{item.subCategory8}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}