import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Messenger from './Admin/pages/messenger/Messenger'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import BookPage from './Page/BooksPage'
import Detail from './Page/Detail'
import ContextProvider from './Page/BooksPage/Context/Context'
import MyAccount from './Page/MyAccount'

export default function App() {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route exact path='/books'>
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
                    <Route path='/account/:tab'>
                        <MyAccount />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </>
    )
}
