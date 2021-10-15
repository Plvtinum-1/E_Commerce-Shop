import BCarousel  from './BCarousel';
import BestSellers from './BestSellers';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import Exclusive from './Exclusive';
import AboutSection from './AboutSection';
import './Home.css';

const Home = () => {
    return (
        <>
            <BCarousel />
            <BestSellers />
            <Exclusive />
            <FeaturedProducts />
            <AboutSection />
            <Testimonials />
        </>
    )
}

export default Home



