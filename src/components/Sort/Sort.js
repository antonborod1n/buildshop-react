import { useState } from 'react';
import './sort.scss';

export function Sort() {
    const [arrSort, setArrSort] = useState(["популярности", "дешевле", "дороже", "алфавиту"]);
    const [active, setActive] = useState(0);
    const [value, setValue] = useState(null);
    const [clas, setСlas] = useState(true);

    function onChangeActive(index) {
        setActive(index);
    }

    return (
        <div className="catalog__filter">Сортировка по:
            {
                arrSort.map((item, index) => {
                    return (
                        <button className={active == index ? "catalog__filter-btn catalog__filter-btn--active" : "catalog__filter-btn"} onClick={() => onChangeActive(index)}>{item}</button>
                    )
                })
            }
        </div>
    )
}