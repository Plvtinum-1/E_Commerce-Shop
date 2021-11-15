import BCarousel  from './BCarousel';
import BestSellers from './BestSellers';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Exclusive from './Exclusive';
import './Home.css';

const Home = ({ products, onAddToCart }) => {
    return (
        <>
            <BCarousel />
            <BestSellers products={products} />
            <Exclusive />
            <FeaturedProducts onAddToCart={onAddToCart} products={products} />
            <Testimonials />
        </>
    )
}

export default Home



