import React from 'react'

const PageNotFound = (props) => {
    console.log('props',props)
    return (
        <div className='error'>
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
        </div>
    )
}

export default PageNotFound
