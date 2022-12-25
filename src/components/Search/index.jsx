import { useState } from 'react';
import styles from './Search.module.scss';

export function Search() {
    const [searchValue, setSeacrhValue] = useState('');

    return (
        <form className={styles.form} action="#">
            <button
                onClick={() => setSeacrhValue('')}
                className={styles.input__search__btn}
                style={{ backgroundImage: "url(../images/icons/search.svg)" }}>
            </button>
            <input
                className={styles.input__search}
                type="search"
                placeholder="Поиск"
                value={searchValue}
                onChange={(e) => setSeacrhValue(e.target.value)}
            />
        </form>
    )
}