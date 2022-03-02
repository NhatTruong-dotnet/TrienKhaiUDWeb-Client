import React from 'react'
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import ListBook from './Components/ListBook/ListBook'
import Sidebar from './Components/Sidebar/Sidebar'

function Books(props) {
    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-3'>
                        <Sidebar />
                    </div>
                    <div className='col l-9'>
                        <ListBook />
                    </div>
                </div>
            </div>
        </GlobalStyle>
    )
}

export default Books
