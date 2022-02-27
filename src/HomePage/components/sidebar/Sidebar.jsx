import './sidebar.css'
import SiderbarItem from './sidebarItem/SiderbarItem'

export default function Sidebar() {
  return (
    <>
    <div className="containerSidebar col-2">
      <div className="sidebarHeader">
        <p >Danh mục sản phẩm</p>
      </div>
      <ul className='nav navbar-nav verticalmenu'>
        <SiderbarItem sidebarItemName="Sách trong nước"/>
        <SiderbarItem sidebarItemName="Sách nước ngoài"/>
        <SiderbarItem sidebarItemName="Sách bán chạy"/>
        <SiderbarItem sidebarItemName="Giảm giá sốc"/>
      </ul>
    </div>
    </>
  )
}
