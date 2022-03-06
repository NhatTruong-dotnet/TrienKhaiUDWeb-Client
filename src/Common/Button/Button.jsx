import clsx from 'clsx'
import styles from './button.module.css'

function Button({ icon, children, solid, style, eventClick = () => {} }) {
    return (
        <button
            className={clsx(styles.button, {
                [styles.solid]: solid,
            })}
            style={style}
            onClick={eventClick}
        >
            <span className={styles.icon}>{icon}</span>
            <span
                className={clsx({
                    [styles.title]: icon,
                })}
            >
                {children}
            </span>
        </button>
    )
}

export default Button
