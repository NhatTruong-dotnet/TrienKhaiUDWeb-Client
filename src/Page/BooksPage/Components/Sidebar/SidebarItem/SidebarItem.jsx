import styles from './sidebarItem.module.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../../Context/Context'

function SidebarItem({ title, listFilter = [], checkbox }) {
    const navigate = useHistory()
    const { setUrl } = useContext(Context)

    function setURLFilter(url) {
        localStorage.setItem('url', JSON.stringify(url))
        setUrl(url)
        navigate.push(`/books`)
    }

    return (
        <div className={styles.sideBar}>
            <div className={styles.sidebarTitle}>{title}</div>
            {listFilter.map(({ id, value, label }) => (
                <div className={styles.filterItem} key={id}>
                    {checkbox ? (
                        <FilterCheckBox id={id} value={value} label={label} />
                    ) : (
                        <div
                            className={styles.link}
                            onClick={() => {
                                setURLFilter(value)
                            }}
                        >
                            {label}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function FilterCheckBox({ id, value, label }) {
    return (
        <span>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={id}
                value={value}
            />
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </span>
    )
}

export default SidebarItem
