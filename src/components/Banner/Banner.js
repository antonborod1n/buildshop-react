import './banner.scss';

export function Banner() {

    return (
        <section className="banner">
            <div className="container">
                <div className="banner__inner" style={{ backgroundImage: "url(../images/slider1.jpg)" }}>
                    <div className="banner__box">
                        <h2 className="banner__title">Специальные предложения</h2>
                        <p className="banner__subtitle">на строительные материалы и товары для ремонта</p>
                        <a className="banner__link btn" href="#">Подробнее</a>
                    </div>
                </div>
            </div>
        </section >
    )
}