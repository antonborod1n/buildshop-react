import './breadcrumbs.scss';

export function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        Главная
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        Каталог
                    </a>
                </li>
                <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="#">
                        Сухие смеси
                    </a>
                </li>
            </ul>
        </div>
    )
}