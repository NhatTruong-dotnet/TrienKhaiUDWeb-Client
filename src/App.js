import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Messenger from './Admin/pages/messenger/Messenger'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import BookPage from './Page/BooksPage'
import Detail from './Page/Detail'
import ContextProvider from './Page/BooksPage/Context/Context'
import CartContextProvider from './Header/Context/Context'
import MyAccount from './Page/MyAccount'

import Cart from './Cart/Cart'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import ToastMessage, { emitMessage } from './Common/ToastMessage/ToastMessage'

const common_en = require('./Common/translations/en/common.json')
const common_vn = require('./Common/translations/vn/common.json')
export default function App() {
    return (
        <>
            <Router>
                <CartContextProvider>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <HomePage />
                            {/* <button
                                onClick={() => emitMessage('success', 'Hello')}
                            >
                                click
                            </button> */}
                        </Route>
                        <Route path='/books'>
                            <ContextProvider>
                                <BookPage />
                            </ContextProvider>
                        </Route>
                        <Route path='/admin/messenger'>
                            <Messenger />
                        </Route>
                        <Route exact path='/detail/:bookName'>
                            <Detail />
                        </Route>
                        <Route exact path='/checkout/cart'>
                            <Cart />
                        </Route>
                        <Route path='/account/:tab'>
                            <MyAccount />
                        </Route>
                    </Switch>
                    <Footer />
                    <ToastMessage />
                </CartContextProvider>
            </Router>
        </>
    )
}
