import { Link } from 'react-router-dom'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <span className={styles.inner__top}>404 😕</span>
                <h1 className={styles.notfound__title}>Страница не найдена</h1>
                <p className={styles.notfound__descr}>Неправильно набран адрес или такая страница больше не существует</p>
                <Link className="btn" to="/">Перейти на главную</Link>
            </div>

        </div>
    )
}