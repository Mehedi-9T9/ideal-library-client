import React, { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';
import axios from 'axios';
import Swal from 'sweetalert2'

const BorrowedBook = () => {
    const [borrows, setBorrows] = useState([])
    const [reload, setReload] = useState(true)
    const [view, setView] = useState(false)
    const returnHandle = (id, booksId) => {
        axios.delete(`${import.meta.env.VITE_API}return/${id}`)
            .then(res => {
                setReload(!reload)
                console.log(res.data)
                Swal.fire({
                    // position: "top",
                    icon: "success",
                    title: "Book Return Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
        axios.post(`${import.meta.env.VITE_API}updatequan/${booksId}`)
            .then(res => console.log(res.data))

    }
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}borrow`)
            .then(res => setBorrows(res.data))
    }, [reload])
    const viewHandle = (e) => {
        if (e.target.checked) {
            setView(true)
        } else { setView(false) }

    }
    console.log(view);

    return (
        <div className='container mx-auto'>
            <label className="flex cursor-pointer gap-2 md:l-20 md:mt-10">
                <span className="label-text">Grid View</span>
                <input onChange={viewHandle} type="checkbox" value="synthwave" className="toggle theme-controller" />
                <span className="label-text">List View</span>
            </label>
            <div className=' my-10'>
                {
                    view ? <div>

                        <div className="overflow-x-auto drop-shadow-md md:mb-0 mb-5 ">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            Photo
                                        </th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Work</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        borrows?.map(borrow => <tr key={borrow._id}>
                                            {/* <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th> */}
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={borrow?.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                {borrow?.bookName}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{borrow?.authorName}</span>
                                            </td>
                                            <td>{borrow?.category}</td>
                                            <th>
                                                <button onClick={() => returnHandle(borrow?._id, borrow?.booksId)} className="btn  btn-md">Return</button>
                                            </th>
                                        </tr>)
                                    }
                                </tbody>
                                {/* foot */}


                            </table>
                        </div>


                    </div> :
                        <div className='md:grid grid-cols-2 gap-6 md:mb-0 mb-5'>
                            {
                                borrows?.map(borrow => <BookCard key={borrow._id} info={borrow} returnHandle={returnHandle}></BookCard>)
                            }
                        </div>

                }






            </div>
        </div>
    );
};

export default BorrowedBook;