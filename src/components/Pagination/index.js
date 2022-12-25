import styles from './Pagination.module.scss'

export const Pagination = () => {

    return (
        <div className={styles.pagination}>
            <ul className={styles.pagination__list}>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 5L5 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        1
                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        2
                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        3
                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        4
                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        ...
                    </a>
                </li>
                <li className={styles.pagination__item}>
                    <a className={styles.pagination__link} href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#454950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </li>
            </ul>
        </div>
    )
}