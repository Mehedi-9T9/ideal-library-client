import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCard from '../AllBook/BookCard';

const AvailableBook = () => {
    const [filterBook, setFilterBook] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/availablebook')
            .then(res => {
                const data = res.data
                const availableBook = data.filter(item => item.quantity > 0)
                setFilterBook(availableBook)
            })
    }, [])
    return (
        <div className='md:grid grid-cols-2 gap-6'>
            {filterBook?.map(item => <BookCard key={item._id} info={item}></BookCard>)}
        </div>
    );
};

export default AvailableBook;