import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const BookDetails = () => {
    const [reload, setReload] = useState(true)
    const [data, setData] = useState({})
    const { id } = useParams()
    const refetch = () => {
        setReload(!reload)
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/book/${id}`)
            .then(res => setData(res.data))
    }, [reload])
    // const data = useLoaderData()
    const { photo, bookName, authorName, description, about, _id, quantity } = data
    const { _id: bookId, ...postData } = data


    const borrowHandle = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const returnDate = e.target.returnDate.value

        const borrowInfo = { ...postData, name, returnDate, booksId: id }



        console.log(borrowInfo);

        // fetch(`http://localhost:5000/bookDetails/${_id}`)
        axios.post(`http://localhost:5000/bookDetails/${_id}`, borrowInfo)
            .then(res => {
                refetch()
                console.log(res.data)
                // Swal.fire({
                //     // position: "top",
                //     icon: "success",
                //     title: "Book Added Successfully",
                //     showConfirmButton: false,
                //     timer: 1500
                // });
            })

    }
    const styling = () => {
        Swal.fire({
            // position: "top",
            icon: "success",
            title: "Book Added Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }




    return (
        <div className='container mx-auto bg-[#F7F7F7]  p-20 m-10 rounded-xl md:flex gap-x-10 '>
            <div className='md:w-[40%]'>
                <img src={photo} alt="" className='rounded-xl' />
            </div>
            <div className='md:w-[60%]'>
                <h2 className='text-3xl font-platypi font-semibold text-[#B09CA9]'>{bookName}</h2>
                <p className='text-lg font-poppins font-medium mt-3 text-[#B09CA9]'>Author: <span className=' font-platypi'>{authorName}</span></p>
                <p className='font-poppins font-semibold'>Quantity: <span className='font-bold font-platypi text-red-500'>{quantity}</span></p>
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
                {
                    quantity < 1 ? <button disabled={true} onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-[#FEF3F0] btn mt-10 drop-shadow-md text-red-700 font-semibold font-platypi text-lg'>Borrow</button> :
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-[#FEF3F0] btn mt-10 drop-shadow-md text-red-700 font-semibold font-platypi text-lg'>Borrow</button>
                }
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg font-platypi ">Welcome</h3>
                    <form onSubmit={borrowHandle} className="card-body">
                        <div className="form-control drop-shadow-md">
                            <label className="label">
                                <span className="label-text font-platypi">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered focus:outline-none" required />
                        </div>
                        <div className="form-control drop-shadow-md">
                            <label className="label">
                                <span className="label-text font-platypi">Return Date</span>
                            </label>
                            <input type="date" name='returnDate' className="input input-bordered focus:outline-none" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn drop-shadow-md">Confirm</button>
                        </div>
                    </form>

                    <div className="modal-action mr-[46%] ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={styling} className="btn btn-circle drop-shadow-md text-xl
                             text-red-700 mx-auto">X</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default BookDetails;