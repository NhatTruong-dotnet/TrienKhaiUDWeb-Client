import React from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import AccountSideBar from './AccountSideBar/AccountSideBar'
import AccountInfo from './AccountInfo/AccountInfo'
import Frame from '../../Common/Frame/Frame'
import ListAddress from './ListAddress/ListAddress'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Orders from './Orders/Orders'
import MyRating from './MyRating/MyRating'

function MyAccount(props) {
    const { tab } = useParams()

    let content
    switch (tab) {
        case 'edit':
            content = (
                <Frame title='Thông tin tài khoản '>
                    <AccountInfo />
                </Frame>
            )
            break
        case 'address':
            content = (
                <Frame title='Sổ địa chỉ'>
                    <ListAddress />
                </Frame>
            )
            break
        case 'orders':
            content = (
                <>
                    <Orders />
                    <Orders />
                </>
            )
            break
        case 'rating':
            content = (
                <Frame title='Nhận xét của tôi'>
                    <MyRating />
                </Frame>
            )
            break

        default:
            throw new Error('invalid tab')
    }

    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-3'>
                        <AccountSideBar />
                    </div>
                    <div className='col l-9'>{content}</div>
                </div>
            </div>
        </GlobalStyle>
    )
}

export default MyAccount
