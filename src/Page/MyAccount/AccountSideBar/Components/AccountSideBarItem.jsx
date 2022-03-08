import React from 'react'
import styles from './AccountSideBarItem.module.css'
import { Link } from 'react-router-dom'

function AccountSideBarItem({ label, linkTo }) {
    return (
        <Link to={linkTo} className={styles.link}>
            {label}
        </Link>
    )
}

export default AccountSideBarItem
