import styles from './sidebarItem.module.css'
import { BiChevronDown } from 'react-icons/bi'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

function SidebarItem({ title, listFilter = [], checkbox }) {
    const navigate = useHistory();

    function setURLFilter(url){
        localStorage.setItem('url',JSON.stringify(url));

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
                        <div className={styles.link} onClick={() => {
                            setURLFilter(value)
                        }}>{label}</div>
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
