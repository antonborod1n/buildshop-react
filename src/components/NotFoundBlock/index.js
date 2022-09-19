import styles from './NotFoundBlock.module.scss'

console.log(styles);


export const NotFoundBlock = () => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <span>😕</span>
                <h1 className={styles.notfound__title}>Ничего не найденно!</h1>
                <p className={styles.descr}>К сожалению данная страница отсутствует на сайте</p>
            </div>

        </div>
    )
}