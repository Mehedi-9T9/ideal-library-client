import React from 'react';
import { FaPenAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router-dom';

const MybookCard = ({ info }) => {
    const { bookName, rating, photo, category, authorName, description, _id, returnDate, quantity } = info
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
                <p className='font-poppins font-semibold'>Quantity: <span className='font-bold font-platypi text-red-500'>{quantity}</span></p>

                <div defaultValue={rating} className="rating gap-1">
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" checked />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
                    <input type="radio" name="rating-3" className="mask mask-heart bg-red-500" />
                </div>
                <p><MdCategory className='inline-block text-2xl' /> {category}</p>

                <div className=" mt-14 space-x-6">

                    <Link to={`/book/${_id}`} ><button className="btn bg-[#FEF3F0] drop-shadow-md text-red-700 font-platypi font-medium">Details</button></Link>
                    <Link to={`/update/${_id}`} ><button className="btn bg-[#FEF3F0] drop-shadow-md text-red-700 font-platypi font-medium">Update</button></Link>



                </div>
            </div>
        </div>
    );
};

export default MybookCard;