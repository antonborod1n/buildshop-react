import './company.scss';
import { useState } from 'react';

export function Company() {
    const arrCompanyName = ["Аксон", "A-progress.ru", "Дешево-Строй", "ГдеМатериал", "ГлавСнаб", "Гермес Групп", "Маркет-Строй", "МосДоброСтрой", "Сатурн", "Ремонт 3000", "Roof-Facade", "Строительный двор", "Skladom.ru", "Smart Complect", "Конструктор", "RDS Строй", "Строительный Онлайн", "Стройкомплект", "Строительный Мир", "Stroimaterial Moskva", "Стройландия", "Stroy Shopper"];
    const [activeCategory, setActiveCategory] = useState(0);

    function onClickBtn(index) {
        setActiveCategory(index)
    }

    return (
        <div className="company__inner">
            {
                arrCompanyName.map((item, index) => {
                    return (
                        <button onClick={() => onClickBtn(index)} key={index} className={activeCategory == index ? "company__item-btn company__item-btn--active" : "company__item-btn"}>{item}</button>
                    )
                })
            }
        </div>
    )
}