import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import product from '../../images/product.png'
import ReviewCard from '../ReviewCard/ReviewCard';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex items-center justify-center'>
                <div>
                    <h1 className='text-6xl font-bold '>New <span className='text-yellow-600'>Headphones</span></h1>
                    <h1 className='text-6xl font-bold text-blue-500'><span>Future of Headphones</span></h1>
                    <p className='my-5 w-96'>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.</p>
                </div>
                <div className='h-2/4 w-2/4'>
                    <img src={product} alt="Headphones" />
                </div>
            </div>
            <div>
                <h3 className='text-center text-3xl my-3'>Customer Reviews(3)</h3>
            </div>
            <div>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
            <div className='flex justify-center my-5'>
                <button onClick={() => navigate('/reviews')} className=' rounded-lg px-5 py-2 bg-blue-500 text-white hover:text-black hover:shadow-lg hover:font-bold'>See All</button>
            </div>
        </div>
    );
};

export default Home;