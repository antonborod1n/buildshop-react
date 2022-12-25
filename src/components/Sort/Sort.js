import './sort.scss';

export function Sort({ valueSort, onChangeSort }) {
    const arrSort = [
        { name: "популярности", sortProperty: 'rating' },
        { name: "цена", sortProperty: 'price' },
        { name: "алфавиту", sortProperty: 'title' }
    ];

    return (
        <div className="catalog__filter">Сортировка по:
            {
                arrSort.map((obj, index) => {
                    return (
                        <button key={index} className={valueSort == index ? "catalog__filter-btn catalog__filter-btn--active" : "catalog__filter-btn"} onClick={() => onChangeSort(obj.sortProperty)}>{obj.name}</button>
                    )
                })
            }
        </div>
    )
}