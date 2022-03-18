import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import BookPage from './Page/BooksPage'
import Detail from './Page/Detail'
import ContextProvider from './Page/BooksPage/Context/Context'
import CartContextProvider from './Header/Context/Context'
import SeenListProvider from './Header/Context/SeenListContext'
import MyAccount from './Page/MyAccount'
import Cart from './Cart/Cart'
import ToastMessage from './Common/ToastMessage/ToastMessage'
import Payment from './Cart/components/payment/Payment'
import Conversation from './Chat/Conversation'

export default function App() {
  let guestInfo = {
    url: "https://serverbookstore.herokuapp.com/api/books/",
  };
  localStorage.setItem("url", JSON.stringify(guestInfo));
    return (
        <>
            <Router>
                <SeenListProvider>
                    <CartContextProvider>
                        <Header />
                        <Switch>
                            <Route exact path='/'>
                                <ContextProvider>
                                    <BookPage />
                                </ContextProvider>
                            </Route>

                            <Route path='/books'>
                                <ContextProvider>
                                    <BookPage />
                                </ContextProvider>
                            </Route>
                            <Route path='/detail/:bookName'>
                                <Detail />
                            </Route>
                            <Route exact path='/checkout/cart'>
                                <Cart />
                            </Route>
                            <Route path='/account/:tab'>
                                <MyAccount />
                            </Route>
                            <Route path='/checkout/payment'>
                                <Payment />
                            </Route>
                        </Switch>
                        <Conversation />
                        <Footer />
                        <ToastMessage />
                    </CartContextProvider>
                </SeenListProvider>
            </Router>
        </>
    )
}
