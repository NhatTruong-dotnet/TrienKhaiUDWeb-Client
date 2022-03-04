import clsx from 'clsx'
import styles from './button.module.css'

function Button({ icon, children, solid, style, onOpenModal = () => {} }) {
    return (
        <button
            className={clsx(styles.button, {
                [styles.solid]: solid,
            })}
            style={style}
            onClick={onOpenModal}
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
