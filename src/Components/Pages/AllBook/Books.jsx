import React from 'react';
import BookCard from './BookCard';

const Books = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container mx-auto grid grid-cols-3 gap-5 my-10'>
            {arr.map(ar => <BookCard key={ar}></BookCard>)}
        </div>
    );
};

export default Books;