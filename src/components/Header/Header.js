import './header.scss'

export function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="container">
                    <div className="header__top">
                        <img className="header__top-local" src="/images/icons/local.svg" alt="Local" />
                        <a className="header__top-link" href="#">Москва</a>
                        <nav className="header__top-menu">
                            <ul className="header__top-list">
                                <li className="header__top-items">
                                    <a className="header__top-item-link" href="#">
                                        Бренды
                                    </a>
                                </li>
                                <li className="header__top-items">
                                    <a className="header__top-item-link" href="#">
                                        Доставка
                                    </a>
                                </li>
                                <li className="header__top-items">
                                    <a className="header__top-item-link" href="#">
                                        Возврат
                                    </a>
                                </li>
                                <li className="header__top-items">
                                    <a className="header__top-item-link" href="#">
                                        Документация
                                    </a>
                                </li>
                                <li className="header__top-items">
                                    <a className="header__top-item-link" href="#">
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="header__main">
                <div className="container">
                    <div className="header__content">
                        <a className="logo" href="#">
                            <img className="logo-img" src="/images/logo.svg" alt="Logotip" />
                        </a>
                        <button className="header__content-btn btn">Каталог</button>
                        <form className="form" action="#">
                            <input className="input-search" type="search" placeholder="Поиск" />
                            <button className="input-search__btn"></button>
                        </form>
                        <div className="header__user">
                            <ul className="header__user-nav">
                                <li className="header__user-items">
                                    <a className="header__user-link" href="#">
                                        <img className="header__userimg" src="/images/icons/user.svg" alt="User" />
                                        <span>Профиль</span>
                                    </a>
                                </li>
                                <li className="header__user-items">
                                    <a className="header__user-link" href="#">
                                        <img className="header__userimg" src="/images/icons/order.svg" alt="Order" />
                                        <span>Заказы</span>
                                    </a>
                                </li>
                                <li className="header__user-items">
                                    <a className="header__user-link" href="#">
                                        <img className="header__userimg" src="/images/icons/cart.svg" alt="Cart" />
                                        <span>Корзина</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__menu">
                <div className="container">
                    <ul className="menu">
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Акции
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Строительные материалы
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Керамическая плитка
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Краски
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Сантехника
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Напольные покрытия
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Инструменты
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Обои
                            </a>
                        </li>
                        <li className="menu__items">
                            <a className="menu__link" href="#">
                                Окна
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}