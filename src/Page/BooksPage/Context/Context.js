import { createContext, useState } from 'react'
import axios from 'axios'

export const Context = createContext()

function Provider({ children }) {
    const [listBook, setListBook] = useState([])
    const [url, setUrl] = useState(
        'https://serverbookstore.herokuapp.com/api/books/Search-Translator/local'
    )

    const fetchData = async () => {
        try {
            const res = await axios.get(url)
            setListBook(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        listBook,
        fetchData,
        setUrl,
        url,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
