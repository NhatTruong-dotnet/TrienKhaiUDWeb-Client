import styles from './sidebarItem.module.css'

function SidebarItem({ title, listFilter = [], checkbox }) {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sidebarTitle}>{title}</div>
            {listFilter.map(({ id, value, label }) => (
                <div className={styles.filterItem} key={id}>
                    {checkbox ? (
                        <FilterCheckBox id={id} value={value} label={label} />
                    ) : (
                        <div className={styles.link}>{label}</div>
                    )}
                </div>
            ))}

        </div>
    )
}

function FilterCheckBox({ id, value, label }) {
    return (
        <>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={id}
                value={value}
            />
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </>
    )
}

export default SidebarItem
