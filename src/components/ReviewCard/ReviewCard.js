import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const ReviewCard = (props) => {

    const { name, about } = props.review;

    return (

        <div className='flex justify-center items-center my-5'>
            <div class="p-6 w-full">
                <div class="p-6 rounded-lg shadow-lg bg-blue-100">
                    <h2 class="text-xl font-bold mb-2 text-gray-800">{name}</h2>
                    <p class="text-gray-700">{about}</p>
                    <div className="flex justify-start mt-4">
                        <h4 className='text-gray-700'>Rating: </h4><Rating
                            initialRating={5}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
