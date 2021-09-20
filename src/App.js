import { useState, useEffect } from 'react';
import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyForm from './components/MyForm/MyForm';
import Nav from './components/Nav/Nav' 
import Home from './components/Home/Home'

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
        setCart(cart)
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
        catego()
    }, [])
    
    // const category = async () => {
    //   const { data } = await commerce.categories.list()
    //   console.log(data)

    //   const retrieve = await commerce.categories.retrieve(data[0].id)
    //   console.log(retrieve)
    // }
    // category()
      console.log(Route)
      return (
        <Router>
          <div>
            <Nav totalItems={cart.total_items} />
           
            <Switch>
              <Route exact path='/products'>
              <Products categories={categories} products={products} onAddToCart={handleAddToCart} />
              </Route>
            
              <Route exact path='/cart'>
                <Cart cart={cart} onAddToCartQty={handleUpdateCartQty} onRemoveCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
              </Route>

              <Route exact path='/checkout'>
                <Checkout cart={cart} />
              </Route>

              <Route path='/form'>
                <MyForm pro={pro} />
              </Route>

              <Route path='/contact'>
                <h1>Contact Us</h1>
              </Route>

              <Route path='/about'>
                <h1>About Us</h1>
              </Route>

              <Route path='/'>
                  <Home />
              </Route>
            </Switch>
          </div>  
        </Router> 
      );   
}


export default App;
 