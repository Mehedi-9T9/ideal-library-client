import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const data = useLoaderData()
    const { photo, bookName, authorName, description, about } = data




    return (
        <div className='container mx-auto bg-[#F7F7F7]  p-20 m-10 rounded-xl md:flex gap-x-10 '>
            <div className='md:w-[40%]'>
                <img src={photo} alt="" className='rounded-xl' />
            </div>
            <div className='md:w-[60%]'>
                <h2 className='text-3xl font-platypi font-semibold text-[#B09CA9]'>{bookName}</h2>
                <p className='text-lg font-poppins font-medium mt-3 text-[#B09CA9]'>Author: <span className=' font-platypi'>{authorName}</span></p>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                </div>
                <div className='my-5'>
                    <h1 className='text-2xl font-platypi text-black'>Description:</h1>
                    <p className='text-[#B09CA9]'>{description}</p>
                </div>
                <div>
                    <h2 className='text-2xl font-platypi text-black'>Example:</h2>
                    <p className='text-[#B09CA9]'>{about}</p>
                </div>
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-[#FEF3F0] btn mt-10 drop-shadow-md text-red-700 font-semibold font-platypi text-lg'>Borrow</button>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg font-platypi ">Welcome</h3>
                    <form className="card-body">
                        <div className="form-control drop-shadow-md">
                            <label className="label">
                                <span className="label-text font-platypi">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control drop-shadow-md">
                            <label className="label">
                                <span className="label-text font-platypi">Return Date</span>
                            </label>
                            <input type="date" className="input input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn drop-shadow-md">Confirm</button>
                        </div>
                    </form>

                    <div className="modal-action ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default BookDetails;