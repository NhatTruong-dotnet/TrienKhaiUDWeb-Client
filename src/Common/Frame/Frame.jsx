import React from 'react'
import styles from './Frame.module.css'
import clsx from 'clsx'

function Frame({ title, children }) {
    return (
        <div className={clsx(styles.frame, 'shadow')}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    )
}

export default Frame
