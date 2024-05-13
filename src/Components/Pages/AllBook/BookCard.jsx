import React from 'react';
import { FaPenAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const BookCard = ({ info, returnHandle }) => {
    const { bookName, rating, photo, category, authorName, description, _id, returnDate, quantity, booksId } = info
    const bookRating = [...Array(rating)]
    console.log(info);
    return (
        <div className="card  bg-[#F7F7F7] drop-shadow-md flex flex-row py-6 px-10">
            <figure className=" rounded-xl">
                <div className='rounded-xl bg-[#F7F7F7]'>
                    <img src={photo} alt="Shoes" className="rounded-2xl w-[250px] h-80  " />
                </div>
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-platypi text-2xl border-b">{bookName}</h2>
                <div className='flex items-center gap-x-3 mt-3'>
                    <FaPenAlt />
                    <p className='font-poppins'>{authorName}</p>
                </div>
                {
                    returnDate ? <p className='text-red-700 font-semibold font-poppins'>Return Date: <span className='font-platypi text-black'>{returnDate}</span></p> : null
                }
                {
                    !returnDate ? <p className='font-poppins font-semibold'>Quantity: <span className='font-bold font-platypi text-red-500'>{quantity}</span></p> : null
                }

                <div defaultValue={rating} className="rating gap-1 items-center">
                    <span className='text-lg font-platypi'>Rating: </span>
                    {
                        bookRating?.map((star, idx) => <FaStar className='text-yellow-500 ' key={idx} />)
                    }

                </div>

                <div className="card-actions items-center mt-20">
                    <p><MdCategory className='inline-block text-2xl' /> {category}</p>
                    {
                        returnDate ? <button onClick={() => returnHandle(_id, booksId)} className="btn bg-[#FEF3F0] drop-shadow-md text-red-700 font-platypi font-medium">Return</button> :
                            <Link to={`/book/${_id}`} ><button className="btn bg-[#FEF3F0] drop-shadow-md text-red-700 font-platypi font-medium">Details</button></Link>


                    }
                </div>
            </div>
        </div>
    );
};

export default BookCard;