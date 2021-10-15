import { Grid, Typography } from '@material-ui/core';
import Product from './Product';
import useStyles from './Products';

const Products = ({ products, onAddToCart, categories }) => {
    const classes = useStyles();
    return (    
    <main className={classes.content}>
        <div className={classes.toolbar} />
    
            <Grid container justify="center" spacing={4}>
               {categories.map(category => {
                  return (
                    <>
                        <Typography variant='h3' component='h2' gutterBottom style={{marginTop: 20}}>{category.name}</Typography>
                        <Grid container spacing={4}>
                            {category.productsData.map(product => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} onAddToCart={onAddToCart} />
                                </Grid>     
                            ))}
                        </Grid>
                    </>     
                    )
              })}
            </Grid>         
    </main>
    )    
}

export default Products