import React from 'react';
import BookCard from './BookCard';


const Books = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container mx-auto my-10 '>
            <div role="tablist" className="tabs tabs-lifted  ">
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Romantic" />
                <div role="tabpanel" className="tab-content p-10">

                    <div className=' grid grid-cols-3 gap-5 '>
                        {arr.map(ar => <BookCard key={ar}></BookCard>)}
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="History" checked />
                <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Religion" />
                <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl font-platypi" aria-label="Kids" />
                <div role="tabpanel" className="tab-content p-10">Tab content 4</div>
            </div>

        </div>



    );
};

export default Books;