import clsx from 'clsx'
import styles from './AccountInfo.module.css'
import Button from '../../../Common/Button/Button'

function AccountInfo(props) {
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
                <label className={styles.label}>Chọn hình</label>
                <input
                    type='file'
                    className={clsx(styles.input, styles.file)}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Mật khẩu hiện tại</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Mật khẩu hiện tại'
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Mật khẩu mới</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Mật khẩu mới'
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Nhập lại Mật khẩu mới</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Nhập lại Mật khẩu mới'
                />
            </div>

            <div className={styles.btnWrap}>
                <Button solid>Lưu thay đổi</Button>
            </div>
        </form>
    )
}

export default AccountInfo
