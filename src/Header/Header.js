import { FiLogIn } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'
import './Login/Login'
import './header.css'
import Login from './Login/Login'
import LogOut from './Login/Logout/logout'
import HeaderCart from './HeaderCart/HeaderCart'
import { useHistory } from 'react-router-dom'
import SeenCart from './SeenCart/SeenCart'
import { FiUser } from 'react-icons/fi'
import { useState } from 'react'
function Header() {
    const [searchData, setSearchData] = useState('')
    const navigate = useHistory()

    const handleSearch = async () => {}

    return (
        <div className='hero_area'>
            {/* header section strats */}
            <header className='header_section'>
                <div className='container-fluid'>
                    <nav className='navbar navbar-expand-lg custom_nav-container '>
                        <a
                            className='navbar-brand'
                            onClick={() => {
                                localStorage.setItem(
                                    'url',
                                    JSON.stringify(
                                        'https://serverbookstore.herokuapp.com/api/books/'
                                    )
                                )
                                navigate.push('/books')
                            }}
                            href='#'
                            style={{ alignItems: 'center', paddingLeft: 100 }}
                        >
                            <span>Bostorek</span>
                        </a>

                        <div
                            className='collapse navbar-collapse'
                            id='navbarSupportedContent'
                            style={{ alignItems: 'center', paddingLeft: 250 }}
                        >
                            <ul
                                className='navbar-nav'
                                style={{ width: '100%', alignItems: 'center' }}
                            >
                                <li
                                    className='nav-item'
                                    style={{
                                        padding: '10px 25px',
                                        width: '50%',
                                    }}
                                >
                                    <from className='search_form'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Search here...'
                                            value={searchData}
                                            onChange={e =>
                                                setSearchData(e.target.value)
                                            }
                                        />
                                        <button type='submit'>
                                            <FaSearch />
                                        </button>
                                    </from>
                                </li>
                                <li
                                    className='nav-item header-cart-noti'
                                    style={{ textAlign: 'center' }}
                                >
                                    <FiBell className='header-icon' />
                                    <a className='nav-link' href='#'>
                                        {' '}
                                        Danh sách đã xem
                                    </a>
                                    {/* <div class="cart-number" >
						    <span>1</span>
					     </div> */}
                                    <SeenCart style={{ top: '-20px' }} />
                                </li>
                                <li
                                    className='nav-item header-cart-noti'
                                    style={{ textAlign: 'center' }}
                                >
                                    <FiShoppingCart className='header-icon' />
                                    <a className='nav-link' href='#'>
                                        {' '}
                                        Giỏ hàng
                                    </a>
                                    {/* <div class="cart-number" >
						    <span>1</span>
					     </div> */}
                                    <HeaderCart style={{ top: '-20px' }} />
                                </li>
                                <li
                                    className='nav-item '
                                    style={{ textAlign: 'center' }}
                                    id='iconLogin'
                                    onClick={() => {
                                        document
                                            .getElementById('login-register')
                                            .classList.add('active')
                                    }}
                                >
                                    <FiLogIn className='header-icon' />
                                    <a
                                        className='nav-link '
                                        href='#'
                                        id='myAccount'
                                    >
                                        Đăng nhập{' '}
                                    </a>
                                </li>
                                <li
                                    className='nav-item header-cart-noti display_none'
                                    style={{ textAlign: 'center' }}
                                    id='userAccount'
                                >
                                    <FiUser className='header-icon' />
                                    <a
                                        className='nav-link '
                                        href='#'
                                        id='myAccount'
                                    >
                                        Tài khoản{' '}
                                    </a>
                                    <LogOut style={{ top: '-20px' }} />
                                </li>
                            </ul>
                        </div>
                        {/* </div>
                         */}
                    </nav>
                </div>
                {/* =============đăng nhập */}
                <Login />
            </header>
        </div>
    )
}
export default Header
