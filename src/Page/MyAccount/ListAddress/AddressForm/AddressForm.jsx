import Button from '../../../../Common/Button/Button'
import styles from './AddressForm.module.css'

function AddressForm({ handleCloseForm }) {
    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Họ và tên</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Họ và tên'
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Số điện thoại</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Số điện thoại'
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Địa chỉ</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Địa chỉ'
                />
            </div>
            <div className={styles.btnWrap}>
                <div className={styles.link} onClick={handleCloseForm}>
                    Quay lại
                </div>
                <Button solid>Lưu thay đổi</Button>
            </div>
        </form>
    )
}

export default AddressForm
