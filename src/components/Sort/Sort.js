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

    const addText = (value) => {
        const newArr = [...arrSort, value];
        setArrSort(newArr);
    }

    const foo = (e) => {
        console.log(e.target.value);

        setValue(e.target.value)
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

            <input type="text" onChange={foo} value={value} />
        </div>
    )
}