import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Messenger from "./Admin/pages/messenger/Messenger";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import BookPage from "./Page/BooksPage";
import Detail from "./Page/Detail";
import ContextProvider from "./Page/BooksPage/Context/Context";
import CartContextProvider from "./Header/Context/Context";
import SeenListProvider from "./Header/Context/SeenListContext";
import MyAccount from "./Page/MyAccount";
import AdminContext from "./Admin/Context/Context";
import Cart from "./Cart/Cart";
import ToastMessage from "./Common/ToastMessage/ToastMessage";
import Payment from "./Cart/components/payment/Payment";
import Conversation from "./Chat/Conversation";
import BillPage from "./Admin/pages/bills";

export default function App() {
  return (
    <>
      <Router>
        <AdminContext>
          <SeenListProvider>
            <CartContextProvider>
              <Header />
              <Switch>
              <Route path="/admin/messenger">
                  <Messenger />
                </Route>
                <Route exact path="/">
                  <ContextProvider>
                    <BookPage />
                  </ContextProvider>
                </Route>
                <Route exact path="/admin/bill">
                  <BillPage />
                </Route>
                <Route path="/books">
                  <ContextProvider>
                    <BookPage />
                  </ContextProvider>
                </Route>
                <Route path="/detail/:bookName">
                  <Detail />
                </Route>
                <Route exact path="/checkout/cart">
                  <Cart />
                </Route>
                <Route path="/account/:tab">
                  <MyAccount />
                </Route>
                <Route path="/checkout/payment">
                  <Payment />
                </Route>
                <Route>
                  <Conversation />
                </Route>
              </Switch>
              <Footer />
              <ToastMessage />
            </CartContextProvider>
          </SeenListProvider>
        </AdminContext>
      </Router>
    </>
  );
}
