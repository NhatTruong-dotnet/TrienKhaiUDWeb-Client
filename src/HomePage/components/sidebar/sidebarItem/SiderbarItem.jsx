import './sidebarItem.css'
export default function SiderbarItem(props) {
  return (
    <div className='dropdown'>
        <div className="col-11 sidebarName">
            <a href=''>{props.sidebarItemName} </a>
        </div>
        <a href=""><img src="https://img.icons8.com/material-sharp/20/000000/forward.png"/></a>
    </div>
  )
}
