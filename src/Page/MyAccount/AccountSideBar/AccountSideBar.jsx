import clsx from 'clsx'
import React from 'react'
import styles from './AccountSideBar.module.css'
import AccountSideBarItem from './Components/AccountSideBarItem'

function AccountSideBar(props) {
    return (
        <div className={clsx(styles.sideBarContainer, 'shadow')}>
            <div className={styles.title}>Tài khoản</div>
            <AccountSideBarItem
                label='Thông tin tài khoản'
                linkTo='/account/edit'
            />
            <AccountSideBarItem label='Sổ địa chỉ' linkTo='/account/address' />
            <AccountSideBarItem
                label='Đơn hàng của tôi'
                linkTo='/account/orders'
            />
            {/* <AccountSideBarItem label='Yêu thích' linkTo='' /> */}
            <AccountSideBarItem
                label='Nhận xét của tôi'
                linkTo='/account/rating'
            />
        </div>
    )
}

export default AccountSideBar
