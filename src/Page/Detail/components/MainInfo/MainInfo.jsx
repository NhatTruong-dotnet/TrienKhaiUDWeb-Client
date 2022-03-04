import styles from './MainInfo.module.css'
import clsx from 'clsx'
import RatingStar from '../../../../Common/RatingStar/RatingStar'
import { formatCurrency } from '../../../../Tools/formatCurrency'

function MainInfo(props) {
    return (
        <>
            <h1 className={styles.name}>Thám Tử Lừng Danh Conan - Tập 99</h1>
            <div className='mainInfoContainer'>
                <div className={styles.mainInfoRow}>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Nhà cung cấp:</span>
                        <span className={clsx(styles.content, styles.link)}>
                            Nhà Xuất Bản Kim Đồng
                        </span>
                    </div>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Tác giả:</span>
                        <span className={styles.content}>
                            Gosho Aoyama, Yutaka Abe, Denjiro Maru
                        </span>
                    </div>
                </div>
                <div className={styles.mainInfoRow}>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Nhà xuất bản:</span>
                        <span className={clsx(styles.content, styles.link)}>
                            NXB Kim Đồng
                        </span>
                    </div>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Hình thức bìa:</span>
                        <span className={styles.content}>Bìa mềm</span>
                    </div>
                </div>
                <RatingStar>
                    <span className={styles.ratingAmount}>(0) đánh giá</span>
                </RatingStar>
                <div className={styles.priceContainer}>
                    <div className={styles.discountPrice}>
                        {formatCurrency(63000)}
                    </div>
                    <div className={styles.oldPrice}>
                        {formatCurrency(70000)}
                    </div>
                    <div className={styles.discountPercentage}>-20%</div>
                </div>
            </div>
        </>
    )
}

export default MainInfo
