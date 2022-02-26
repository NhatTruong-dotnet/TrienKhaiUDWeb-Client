import Book from './components/book/Book'
import Sidebar from './components/sidebar/Sidebar'
import Silder from './components/slider/Silder'
import './homepage.css'

export default function HomePage() {
  return (
    <>
      <Silder />
      <Sidebar />
      <Book />
    </>


  )
}
