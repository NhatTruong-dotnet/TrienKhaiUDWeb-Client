import React from 'react'
import Voucher from './Components/Voucher/Voucher'
import styles from './VoucherList.module.css'

function VoucherList(props) {
    return (
        <>
            <header className={styles.header}>
                <div className='icon'>
                    <img
                        src='https://www.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_coupon_red.svg?q=10077'
                        alt='icon'
                    />
                </div>
                <div className={styles.title}>Ưu đãi liên quan</div>
            </header>
            <div className={styles.voucherList}>
                <Voucher />
                <Voucher />
                <Voucher />
                <Voucher />
            </div>
        </>
    )
}

export default VoucherList
