import React from 'react'
import '../style/ContentContainer.css'

function ContentsContainer({ children }: any) {
    return (
        <div className='main-contents'>
            { children }
        </div>
    )
}

export default ContentsContainer