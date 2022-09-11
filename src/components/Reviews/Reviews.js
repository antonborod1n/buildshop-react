import './reviews.scss'

export function Reviews() {
    return (
        <section className="reviews">
            <div className="container">
                <h2 className="title">Отзывы</h2>
                <div className="reviews__inner">
                    <div className="reviews__item">
                        <div className="reviews__item-box">
                            <img className="reviews__user-img" src="../images/avatars-1.svg" alt="User" />
                            <span className="reviews__user-name">Пётр</span>
                        </div>
                        <p className="reviews__content">
                            Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо
                            объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным
                            прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100
                            ₽
                        </p>
                        <div className="reviews__data">21 марта 2022 г.</div>
                    </div>
                    <div className="reviews__item">
                        <div className="reviews__item-box">
                            <img className="reviews__user-img" src="../images/avatars-2.svg" alt="User" />
                            <span className="reviews__user-name">Анна</span>
                        </div>
                        <p className="reviews__content">
                            Живу в п.Володарский МО, очень были рады открытию магазина СтройкаСтор. Хорошие сотрудники, но
                            особенно хочется отметить работу Алексея за его помощь в решении проблем, очень квалифицированные
                            рекомендации по подбору строительных материалов для ремонта. Хороший ассортимент
                        </p>
                        <div className="reviews__data">18 марта 2022 г.</div>
                    </div>
                    <div className="reviews__item">
                        <div className="reviews__item-box">
                            <img className="reviews__user-img" src="../images/avatars-3.svg" alt="User" />
                            <span className="reviews__user-name">Виктор</span>
                        </div>
                        <p className="reviews__content">
                            Заказывал в данном магазине строй материалы. Привезли их вовремя и в прекрасном состоянии, претензий
                            к доставке, персоналу и прочему меня нет. Строй материалы мне понравились, ремонт с ними я сделал
                            отличный. Магазин мне безумно понравился, обязательно обращусь сюда снова, большое спасибо
                        </p>
                        <div className="reviews__data">6 ноября 2021 г.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}