import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons' 
import { spacing } from '@material-ui/system';
import useStyles from './styles';


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}  />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h6' gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant='body2' gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>

                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color="textSecondary" />
                </div>
            </CardContent>

            <CardActions className={classes.CardActions}>
                <IconButton style={{marginRight: '5em'}} aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}><AddShoppingCart /></IconButton>
                <Button href='/view' variant='primary'>View Product</Button>
            </CardActions>
        </Card>
    ) 
}

export default Product 
