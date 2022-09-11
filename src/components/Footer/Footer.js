import './footer.scss';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__box">
                        <a className="logo" href="#">
                            <img className="logo-img" src="/images/logo-footer.svg" alt="Logotip" />
                        </a>
                        <a className="footer__email footer__link" href="mailto:info@stroykastore.ru">info@stroykastore.ru</a>
                        <span className="footer__address footer__link">Москва, ул. Камушкина 10</span>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Личный кабинет
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Заказы
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Избранное
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Корзина
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Каталог
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Акции
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Контакты
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Бренды
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Доставка
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Возврат
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Документация
                            </a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">
                                Стать продавцом
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__copy">
                    <p className="footer__copy-text">
                        © СтройкаСтор
                    </p>
                    <img className="footer__copy-img" src="/images/cards.png" alt="Cards" />
                    <p className="footer__copy-text">
                        github.com/antonborod1n
                    </p>
                </div>
            </div>
        </footer>
    )
}