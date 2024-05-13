import { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';

const Kids = () => {
    const [kids, setKids] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}kids`)
            .then(res => res.json())
            .then(data => setKids(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                kids.map(kid => <BookCard key={kid._id} info={kid}></BookCard>)
            }

        </div>
    );
};

export default Kids;