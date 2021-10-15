import { Restaurant } from '@material-ui/icons'
import React from 'react'
import { Redirect } from 'react-router'
import { useLocation, useParams } from 'react-router'
import PageNotFound from './pages/PageNotFound/PageNotFound'


const Product = ({ products }) => {

    let myId = useParams().id
    console.log('products', products)
    console.log('id', myId)

    let result = products.filter(e => e.id === myId)[0]

    return (
     <> 
        {!result ? <h1>Wait...</h1> : result.id !== myId ? 'Id is Incorrect' :
         <>
            <h1>This is the matched Product Id {result.id}</h1> 

            <h1>{result.name}</h1>
            <h1>{result.price.formatted_with_symbol}</h1>
         </>
        }

    
     </>
    )
}

export default Product
