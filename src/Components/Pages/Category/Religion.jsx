import { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';

const Religion = () => {
    const [religions, setReligions] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}religion`)
            .then(res => res.json())
            .then(data => setReligions(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                religions.map(religion => <BookCard key={religion._id} info={religion}></BookCard>)
            }

        </div>
    );
};

export default Religion;