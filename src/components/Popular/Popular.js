import './popular.scss'

export function Popular(props) {
    const category = props.popularList;

    return (
        !!category && (
            <section className="popular">
                <div className="popular__top">
                    <h2 className="title">Популярные категории</h2>
                    <a className="top-btn" href="#">Все категории</a>
                </div>
                <div className="popular__content">
                    {
                        category.map((item) => {
                            return (
                                <a className="popular__item" href="#" key={item.id}>
                                    <p className="popular__text">{item.title}</p>
                                    <img className="popular__img" src={item.urlImg} alt="Category" />
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        )
    )
}

