import SidebarItem from './SidebarItem/SidebarItem'
import styles from './sidebar.module.css'
import clsx from 'clsx'


const arr1 = [
    {
        id: 1,
        label: 'Sách trong nước',
        value: "https://serverbookstore.herokuapp.com/api/books/Search-Translator/local",
    },
    {
        id: 2,
        label: 'Sách nước ngoài',
        value: "https://serverbookstore.herokuapp.com/api/books/Search-Translator/global",
    },
    {
        id: 3,
        label: 'First News',
        value: "https://serverbookstore.herokuapp.com/api/books/Search-Suppiler/First News",
    }, 
    {
        id: 4,
        label: 'NXB Thanh niên',
        value: "https://serverbookstore.herokuapp.com/api/books/Search-Publisher/NXB Thanh Niên",
    },
    {
        id: 5,
        label: 'NXB Kim Đồng',
        value: "https://serverbookstore.herokuapp.com/api/books/Search-Publisher/NXB Kim Đồng",
    }
]

function Sidebar(props) {
    return (
        <div className={clsx(styles.sidebarContainer, 'shadow')}>
            <div className={styles.title}>Nhóm sản phẩm</div>
            <SidebarItem title={'All Category'} listFilter={arr1} />
        </div>
    )
}

export default Sidebar
