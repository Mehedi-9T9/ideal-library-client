import React, { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';
import axios from 'axios';

const BorrowedBook = () => {
    const [borrows, setBorrows] = useState([])
    const returnHandle = (id) => {
        axios.delete(`http://localhost:5000/return/${id}`)
            .then(res => console.log(res.data))

    }
    useEffect(() => {
        axios.get('http://localhost:5000/borrow')
            .then(res => setBorrows(res.data))
    }, [])

    return (
        <div className='container mx-auto grid grid-cols-2 gap-5 my-10'>

            {
                borrows?.map(borrow => <BookCard key={borrow._id} info={borrow} returnHandle={returnHandle}></BookCard>)
            }

        </div>
    );
};

export default BorrowedBook;