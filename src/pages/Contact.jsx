import { About } from "../components/About/About";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Contact = () => {

    return (
        <section className="contact">
            <div className="contact__top">
                <div className="contact__top-box">
                    <Breadcrumbs />
                    <h2 className="title">Контакты</h2>
                </div>
            </div>
            <div className="contact__map">
                <img className="contact__map-img" src="./images/map.jpg" alt="Map" />
            </div>
            <div className="contact__inner">
                <h2 className="contact__title">ООО «СтройкаСтор»</h2>
                <div className="contact__content">
                    <ul className="contact__info">
                        <li className="contact__info-items contact__item">115114, г. Москва, Дербеневская</li>
                        <li className="contact__info-items contact__item">набережная, д. 7, стр. 8</li>
                        <li className="contact__info-items contact__item">Павелецкая</li>
                        <li className="contact__info-items contact__item">Автобусы 13, 106, 158, 184, 632</li>
                        <li className="contact__info-items contact__item">Остановка «Дербеневская наб., д. 7»</li>
                    </ul>
                    <ul className="contact__rec">
                        <li className="contact__rec-items contact__item">ОГРН: 1047796688554</li>
                        <li className="contact__rec-items contact__item">ИНН 7703528301</li>
                        <li className="contact__rec-items contact__item">КПП 774850001</li>
                        <li className="contact__rec-items contact__item">ОКТМО 45380000</li>
                        <li className="contact__rec-items contact__item">ОГРН 1047796688554</li>
                        <li className="contact__rec-items contact__item">Расчетный рублевый счет: 40702810900001403352</li>
                        <li className="contact__rec-items contact__item">Банк: АО «Сбербанк» г. Москва</li>
                        <li className="contact__rec-items contact__item">Корреспондентский счет: 30101810200000000700</li>
                        <li className="contact__rec-items contact__item">БИК: 044525700</li>
                    </ul>
                    <ul className="contact__support">
                        <li className="contact__support-items contact__item">Поддержка клиентов</li>
                        <li className="contact__support-items contact__item">info@stroykastore.ru</li>
                    </ul>
                </div>
                <About />
            </div>
        </section>
    )
}