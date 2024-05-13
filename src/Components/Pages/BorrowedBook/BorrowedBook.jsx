import React, { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';
import axios from 'axios';
import Swal from 'sweetalert2'

const BorrowedBook = () => {
    const [borrows, setBorrows] = useState([])
    const [reload, setReload] = useState(true)
    const returnHandle = (id) => {
        axios.delete(`http://localhost:5000/return/${id}`)
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

    }
    useEffect(() => {
        axios.get('http://localhost:5000/borrow')
            .then(res => setBorrows(res.data))
    }, [reload])

    return (
        <div className='container mx-auto grid grid-cols-2 gap-5 my-10'>

            {
                borrows?.map(borrow => <BookCard key={borrow._id} info={borrow} returnHandle={returnHandle}></BookCard>)
            }

        </div>
    );
};

export default BorrowedBook;