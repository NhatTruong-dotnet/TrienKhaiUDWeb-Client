import styles from './Quantity.module.css'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr'

function Quantity({ max, value, onChangeValue }) {
    const handleIncrease = () => {
        if (value < max) {
            onChangeValue(value + 1)
        }
    }
    const handleDecrease = () => {
        if (value > 1) {
            onChangeValue(value - 1)
        }
    }
    return (
        <div className={styles.amount}>
            <div className={styles.amountLabel}>Số lượng:</div>
            <div className={styles.amountControl}>
                <div className={styles.decrease} onClick={handleDecrease}>
                    <GrFormSubtract style={{ color: '#d8d8d8' }} />
                </div>
                <div className={styles.number}>{value}</div>
                <div className={styles.increase} onClick={handleIncrease}>
                    <GrFormAdd />
                </div>
            </div>
        </div>
    )
}

export default Quantity
