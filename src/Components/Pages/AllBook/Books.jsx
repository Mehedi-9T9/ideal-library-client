import React from 'react';
import BookCard from './BookCard';
import Romantic from '../Category/Romantic';
import History from '../Category/History';
import Religion from '../Category/Religion';
import Kids from '../Category/Kids';


const Books = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container mx-auto my-10 '>
            <div role="tablist" className="tabs tabs-lifted  ">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Romantic" checked />
                <div role="tabpanel" className="tab-content p-10">
                    <Romantic></Romantic>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="History" />
                <div role="tabpanel" className="tab-content p-10">
                    <History></History>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Religion" />
                <div role="tabpanel" className="tab-content p-10">
                    <Religion></Religion>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Kids" />
                <div role="tabpanel" className="tab-content p-10">
                    <Kids></Kids>
                </div>
            </div>

        </div>



    );
};

export default Books;