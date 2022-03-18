import { removeUserSession, getUser } from '../../../Utils/Common'
import { FiLogOut, FiUser } from 'react-icons/fi'
import './logout.css'
import { useHistory } from 'react-router-dom'
function Logout() {
    const user = getUser()
    const his = useHistory()
    const handleLogout = () => {
        removeUserSession()
        his.push('/')
        document.getElementById('iconLogin').classList.remove('display_none')
        document.getElementById('userAccount').classList.add('display_none')
        console.log('logout')
    }
    return (
        <div className=' top-cart-content' id='logout'>
            <div className='logout-item' onClick={handleLogout}>
                <FiLogOut /> &nbsp;Đăng xuất
            </div>
            <div
                className='logout-item'
                onClick={() => his.push('/account/edit')}
            >
                <FiUser /> &nbsp;Tài khoản
            </div>
        </div>
    )
}
export default Logout
