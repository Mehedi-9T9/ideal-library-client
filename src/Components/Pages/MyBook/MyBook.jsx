import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProvider from '../../Provider/useProvider';
import MybookCard from './MybookCard';

const MyBook = () => {
    const { users } = useProvider()
    const [mybook, setMybook] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API}mybook/${users.email}`)
            .then(res => setMybook(res.data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 container mx-auto gap-6 my-10'>
            {mybook?.map(book => <MybookCard key={book._id} info={book}></MybookCard>)}
        </div>
    );
};

export default MyBook;