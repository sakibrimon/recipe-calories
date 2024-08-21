import PropTypes from 'prop-types';
import backgroundImage from '/src/assets/herobg.png';

const Banner = ({ handleScroll }) => {
    return (
        <div className='mt-12 w-[82.5%] container mx-auto'>
            <div
                className="hero min-h-[550px] rounded-3xl"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}>
                <div className="hero-overlay# bg-opacity-60#"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl text-white">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                        Join our cooking class to master culinary techniques, explore global cuisines, and create delicious dishes. Perfect for beginners and seasoned chefs alike!
                        </p>
                        <button className="btn btn-primary# bg-prime border-0 rounded-[50px]" onClick={handleScroll}>Explore Now</button>
                        <button className="ml-7 btn btn-outline text-white rounded-[50px]">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleScroll: PropTypes.func
}

export default Banner;