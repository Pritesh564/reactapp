import Card from './card.jsx';
import Navbar from './navbar.jsx'

const AboutPage = () => {
    return (
        <div>
            
               
            <h2>About Us</h2>
            <p>Welcome to JobDekho!

               Embark on your journey to success with us. Whether you're a seasoned professional seeking new horizons or a fresh graduate eager to dive into the professional world, our platform is your gateway to endless opportunities.

               At JobDekho, we understand that finding the perfect job is not just about employment; it's about finding a career path that aligns with your aspirations and values. With our user-friendly interface and comprehensive search tools, discover a myriad of job listings tailored to your skills, interests, and location preferences.

               Join a community committed to your growth and prosperity. Explore diverse industries, connect with leading employers, and unlock your full potential. Let us empower you to shape your future and pursue your dreams.

               Your next career move starts here. We are JobDekho – where opportunity meets ambition.
            </p>
            <Card
                title="Team Members"
                imageSrc="team-members.jpg"
                description="Abhinav
                Pritesh
                Abhiram"
            />
        </div>
    );
};

export default AboutPage;