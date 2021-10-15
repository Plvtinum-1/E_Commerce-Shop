import { useState, useEffect } from 'react';
import './App.css'
import { Products, Cart, Checkout, Home, Navbar } from './components';
import ProductDetails from './components/pages/ProductDetails/ProductDetails'
import { commerce } from './lib/commerce';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import AllProducts from './components/pages/AllProducts/AllProducts';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';


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
    

      return (
        <>         
            <Navbar totalItems={cart.total_items} />

            <Switch>
              <Route exact path='/'>
                <Home totalItems={cart.total_items} onAddToCart={handleAddToCart} /> 
              </Route>

              <Route path='/products'>
                <Products categories={categories} products={products} onAddToCart={handleAddToCart} />
              </Route>

              <Route path='/allproducts'>
                <AllProducts categories={categories} products={products} onAddToCart={handleAddToCart} />
              </Route>

              <Route path='/cart'>
                <Cart cart={cart} onAddToCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
              </Route>

              <Route path='/checkout'>
                <Checkout cart={cart} />
              </Route>

              <Route path='/contact'>
                <h1>Contact Us</h1>
              </Route>

              <Route path='/about'>
                <h1>About Us</h1>
              </Route>

              <Route path='/404'>
                <PageNotFound />
              </Route>

              <Route path='/productdetails/:id'> 
                <ProductDetails onAddToCart={handleAddToCart} products={products} />
              </Route>

            </Switch>

            <Footer products={products} />
              
        </> 
      );   
}


export default App;
 