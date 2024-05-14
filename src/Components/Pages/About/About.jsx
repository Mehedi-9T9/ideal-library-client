import React from 'react';

const About = () => {
    return (
        <div className='bg-[#FEF3F0] md:flex gap-x-10 container mx-auto my-10 p-5 md:p-20 rounded-xl'>
            <div className='md:w-[60%]'>
                <h2 className='text-4xl  text-[#B09CA9] font-platypi'>About Of Ideal Library</h2>
                <p className='text-balance text-[#B09CA9] font-poppins mt-7 md:w-[600px]'>An ideal library is more than just a repository of books; it's a dynamic hub of knowledge, creativity, and community engagement. Here's a description:
                    An ideal library is a welcoming space where the scent of aging </p>
                <p className='text-balance text-[#B09CA9] font-poppins mt-7 md:w-[600px]'>paper mixes with the soft hum of computers. Its shelves are lined with books of every genre and era, inviting exploration and discovery. Natural light pours in through large windows, illuminating cozy reading nooks and study corners. Comfortable seating arrangements cater to solitary readers seeking quiet introspection and lively discussion groups alike.</p>
            </div>
            <div className='md:w-[40%] grid grid-cols-2 gap-5 mt-6 md:mt-0'>

                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Total Book</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.5 K</h3>
                </div>

                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Most Popular Book</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.00 K</h3>
                </div>

                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Daily Student</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.5 K</h3>
                </div>

                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Daily Borrow</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.5 K</h3>
                </div>
                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Daily  Return</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.5 K</h3>
                </div>
                <div className='bg-[#F7F7F7] drop-shadow-md border text-center py-5 rounded-md'>
                    <h2 className='text-[#B09CA9] text-2xl font-platypi'>Daily Book Added</h2>
                    <h3 className='text-black text-xl font-bold font-platypi'>3.5 K</h3>
                </div>
            </div>

        </div>
    );
};

export default About;