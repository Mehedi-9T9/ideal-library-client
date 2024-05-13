import React, { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';

const Romantic = () => {
    const [romantics, setRonamtics] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}romantic`)
            .then(res => res.json())
            .then(data => setRonamtics(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                romantics.map(romantic => <BookCard key={romantic._id} info={romantic}></BookCard>)
            }

        </div>
    );
};

export default Romantic;