import Card from './card.jsx';
import Navbar from './navbar.jsx'

const HomePage = () => {
    return (
        <div>
            
            
            <h1>Find your dream job now!</h1>
            <h3>1 lakh+ jobs for you to explore.</h3>
            <hr></hr>
            <h5>Embark on your journey to success with us. Whether you're a seasoned professional seeking new horizons or a fresh graduate eager to dive into the professional world, our platform is your gateway to endless opportunities.</h5>
            <Card
                title="Featured Item"
                imageSrc="featured-item.jpg"
                description="This is our featured item. Check it out!"
            />
            <Card
                title="Featured Item"
                imageSrc="featured-item.jpg"
                description="This is our featured item. Check it out!"
            />

            
        </div>
        
    );
};

export default HomePage;