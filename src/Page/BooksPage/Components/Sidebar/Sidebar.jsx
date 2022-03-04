import SidebarItem from './SidebarItem/SidebarItem'
import styles from './sidebar.module.css'
import clsx from 'clsx'

const arr = [
    {
        id: 1,
        label: '0đ - 150.000đ',
        value: 1,
    },
    {
        id: 2,
        label: '150.000đ - 300.000đ',
        value: 2,
    },
    {
        id: 3,
        label: '300.000đ - 500.000đ',
        value: 3,
    },
]

const arr1 = [
    {
        id: 1,
        label: 'Sách tiếng Việt',
        value: 1,
    },
    {
        id: 2,
        label: 'Thiếu nhi',
        value: 2,
    },
    {
        id: 3,
        label: 'Văn học',
        value: 3,
    },
]

const arr2 = [
    {
        id: 1,
        label: 'Comedy',
        value: 1,
    },
    {
        id: 2,
        label: 'Shounen',
        value: 2,
    },
    {
        id: 3,
        label: 'Adventure',
        value: 3,
    },
]

function Sidebar(props) {
    return (
        <div className={clsx(styles.sidebarContainer, 'shadow')}>
            <div className={styles.title}>Nhóm sản phẩm</div>
            <SidebarItem title={'All Category'} listFilter={arr1} />
            <SidebarItem checkbox listFilter={arr} title='Giá' />
            <SidebarItem checkbox listFilter={arr2} title='GENRES' />
        </div>
    )
}

export default Sidebar
