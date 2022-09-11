import './popular.scss'

export function Popular() {
    return (
        <section className="popular">
            <div className="container">
                <div className="popular__top">
                    <h2 className="title">Популярные категории</h2>
                    <a className="top-btn" href="#">Все категории</a>
                </div>

                <div className="popular__content">
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Душевые
                        </p>
                        <img className="popular__img" src="../images/popular/1.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Пиломатериалы
                        </p>
                        <img className="popular__img" src="../images/popular/2.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Линолеум
                        </p>
                        <img className="popular__img" src="../images/popular/3.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Обои
                        </p>
                        <img className="popular__img" src="../images/popular/4.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Инструменты
                        </p>
                        <img className="popular__img" src="../images/popular/5.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Товары для дачи
                        </p>
                        <img className="popular__img" src="../images/popular/6.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Окна
                        </p>
                        <img className="popular__img" src="../images/popular/7.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Двери
                        </p>
                        <img className="popular__img" src="../images/popular/8.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Сантехника
                        </p>
                        <img className="popular__img" src="../images/popular/9.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Краски
                        </p>
                        <img className="popular__img" src="../images/popular/10.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Электротовары
                        </p>
                        <img className="popular__img" src="../images/popular/11.png" alt="Category" />
                    </a>
                    <a className="popular__item" href="#">
                        <p className="popular__text">
                            Интерьер
                        </p>
                        <img className="popular__img" src="../images/popular/12.png" alt="Category" />
                    </a>
                </div>
            </div>
        </section>
    )
}

