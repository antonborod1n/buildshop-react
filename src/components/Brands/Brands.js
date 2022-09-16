import { useState } from 'react';
import './brands.scss';

export function Brands() {

    const [brendsImg, setBrendsImg] = useState([
        { brandsImg: '../images/brend/1.png', id: 1 },
        { brandsImg: '../images/brend/2.png', id: 2 },
        { brandsImg: '../images/brend/3.png', id: 19 },
        { brandsImg: '../images/brend/4.png', id: 18 },
        { brandsImg: '../images/brend/5.png', id: 17 },
        { brandsImg: '../images/brend/6.png', id: 16 },
        { brandsImg: '../images/brend/7.png', id: 15 },
        { brandsImg: '../images/brend/8.png', id: 14 },
        { brandsImg: '../images/brend/9.png', id: 13 },
        { brandsImg: '../images/brend/10.png', id: 10 },
        { brandsImg: '../images/brend/11.png', id: 11 },
        { brandsImg: '../images/brend/12.png', id: 12 }
    ]);


    const onDeleteImg = (id) => {
        const deleteEl = brendsImg.filter((item) => item.id !== id)
        setBrendsImg(deleteEl);
    }

    return (
        <section className="brands">
            <div className="container">
                <div className="brands__top">
                    <h2 className="title">Бренды</h2>
                    <a className="top-btn" href="#">Все бренды</a>
                </div>
                <div className="brands__content">
                    {
                        brendsImg.map(item => {
                            return <img className="brands__img img__scale" src={item.brandsImg} alt="Бренд" onClick={() => onDeleteImg(item.id)} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}