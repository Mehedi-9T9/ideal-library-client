import React from 'react';
import BookCard from '../AllBook/BookCard';

const BorrowedBook = () => {
    const myArr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container mx-auto grid grid-cols-3 gap-5 my-10'>
            {
                myArr.map(arr => <BookCard key={arr}></BookCard>)
            }

        </div>
    );
};

export default BorrowedBook;