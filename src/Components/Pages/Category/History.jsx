
import { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';

const History = () => {
    const [histories, setHistories] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API}history`)
            .then(res => res.json())
            .then(data => setHistories(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {
                histories?.map(history => <BookCard key={history._id} info={history}></BookCard>)
            }

        </div>
    );
};

export default History;