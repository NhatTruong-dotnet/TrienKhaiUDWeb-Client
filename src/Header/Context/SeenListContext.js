import { createContext, useState } from 'react'
import axios from 'axios'

export const SeenListContext = createContext()

function Provider({ children }) {
    const [seenList, setSeenList] = useState([])

    const fetchData = async url => {
        console.log('run');
        try {
            const res = await axios.get(url)
            setSeenList(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        seenList,
        fetchData,
    }

    return <SeenListContext.Provider value={value}>{children}</SeenListContext.Provider>
}

export default Provider
