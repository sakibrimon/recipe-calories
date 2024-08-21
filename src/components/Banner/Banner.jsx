import backgroundImage from '/src/assets/herobg.png';

const Banner = () => {
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
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                        </p>
                        <button className="btn btn-primary# bg-prime border-0 rounded-[50px]">Explore Now</button>
                        <button className="ml-7 btn btn-outline text-white rounded-[50px]">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;