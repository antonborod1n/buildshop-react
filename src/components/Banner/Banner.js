import './banner.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Banner() {
    const url = 'https://catfact.ninja/fact';
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*  axios.get(url).then(res => setProduct(res.data.fact)) */

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data.fact))
            .catch((error => {
                console.error('Error', error)
            }))
    }, []);

    return (
        <section className="banner">
            <div className="container">
                <div className="banner__inner" style={{ backgroundImage: "url(../images/slider1.jpg)" }}>
                    <div className="banner__box">
                        <h2 className="banner__title">Специальные предложения</h2>
                        <p className="banner__subtitle">на строительные материалы и товары для ремонта</p>
                        <a className="banner__link btn" href="#">Подробнее</a>
                    </div>
                    <div className="banner__box">
                        <button>Click</button>
                        <ul>
                            <li>{product}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}