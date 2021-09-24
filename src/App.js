import { useState, useEffect } from 'react';
import { Navbar, Nav, Products, Cart, Checkout, Categories, Home, ProductDetails } from './components';
import { commerce } from './lib/commerce';
import { Switch, Route } from 'react-router-dom';

  const App = () => {
    
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ cart, setCart ] = useState({});

    const [ pro, setPro ] = useState({});

    const fetchProducts = async () => {
      const response = await commerce.products.list();
       setProducts(response.data);
    }

    const catego = async () => {
      const prod = await commerce.products.list({ limit: 40 });
      setPro(prod)
    }

    const fetchByCategory = async () => {
      const { data: products } = await commerce.products.list({ limit: 40 });
      const { data: catergoriesData } = await commerce.categories.list();

      const productsPerCategory = catergoriesData.reduce((acc, category) => {
        return [
          ...acc,
          {
            ...category,
            productsData: products.filter(product => 
              product.categories.find(cat => cat.id === category.id)
            ),
          },
        ]
      }, [])

      setCategories(productsPerCategory);
    }
  

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    }

    const handleAddToCart = async (productId, quantity) => {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
      const { cart } = await commerce.cart.update(productId, { quantity });
      setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
      const { cart } = await commerce.cart.remove(productId);
      setCart(cart);
    }

    const handleEmptyCart = async () => {
      const { cart } = await commerce.cart.empty();
      setCart(cart);
    }

    useEffect( () => {
        fetchProducts();
        fetchByCategory();
        fetchCart();
        catego();
    }, [])
    
    // const category = async () => {
    //   const { data } = await commerce.categories.list()
    //   console.log(data)

    //   const retrieve = await commerce.categories.retrieve(data[0].id)
    //   console.log(retrieve)
    // }
    // category()

      console.log(categories)

      return (
        <>  
          {/* <Nav totalItems={cart.total_items} /> */}        
            
            <Switch>
              <Route component='Home' exact path='/'>
                <Home categories={categories} totalItems={cart.total_items} onAddToCart={handleAddToCart} /> 
                <Categories /> 
              </Route>

              <Route exact path='/products'>
               <Products categories={categories} products={products} onAddToCart={handleAddToCart} />
              </Route>

              <Route exact path='/cart'>
                <Cart cart={cart} onAddToCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
              </Route>

              <Route exact path='/checkout'>
                <Checkout cart={cart} />
              </Route>

              <Route exact path='/contact'>
                <h1>Contact Us</h1>
              </Route>

              <Route exact path='/about'>
                <h1>About Us</h1>
              </Route>

              <Route exact path='/products/:productId'>
                <ProductDetails />
              </Route>

            </Switch>
              
        </> 
      );   
}


export default App;
 