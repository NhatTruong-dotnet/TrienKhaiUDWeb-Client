import { createContext, useState } from 'react'
import axios from 'axios'

export const Context = createContext()

function Provider({ children }) {
    const [carts, setCarts] = useState([])

    const fetchData = async url => {
        try {
            const res = await axios.get(url)
            setCarts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        carts,
        fetchData,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Provider
