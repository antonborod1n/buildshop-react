import './reviews.scss';

export function Reviews(props) {
    const reviewsElements = props.reviewsList;

    return (
        !!reviewsElements && (
            <section className="reviews">
                <h2 className="title">Отзывы</h2>
                <div className="reviews__inner">
                    {
                        reviewsElements.map((item, index) => {
                            return (
                                <div className="reviews__item" key={item.id}>
                                    <div className="reviews__item-box">
                                        <img className="reviews__user-img" src={item.userImg} alt="User" />
                                        <span className="reviews__user-name">{item.userName}</span>
                                    </div>
                                    <p className="reviews__content">{item.description}</p>
                                    <div className="reviews__data">{item.data}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        )
    )
}