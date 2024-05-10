
const AddBook = () => {
    return (
        <div className='container mx-auto bg-[#FEF3F0] md:mt-20 rounded-xl'>
            <h2 className='text-3xl font-platypi font-semibold text-center pt-10  text-[#C20E1A]'>Add Your <span className='text-black'> Book</span></h2>
            <p className='text-center font-poppins text-[#B09CA9] my-5 px-5'> You present Your self with book, You present Your self with book, You present Your self with book,  </p>
            <form className="card-body md:grid grid-cols-2 gap-x-10 px-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Book Name</span>
                    </label>
                    <input type="text" placeholder="Book Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Quantity</span>
                    </label>
                    <input type="number" placeholder="1" className="input input-bordered  bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Author Name</span>
                    </label>
                    <input type="text" placeholder="Author Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Category</span>
                    </label>
                    <select name="category" id="" className='p-3 rounded-lg '>
                        <option value="romantic">Romantic</option>
                        <option value="romantic1">Romantic1</option>
                        <option value="romantic3">Romantic3</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Rating</span>
                    </label>
                    <input type="number" min={1} max={5} placeholder="Author Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Photo</span>
                    </label>
                    <input type="url" placeholder=" Img URL" className="input input-bordered bg-[#fff]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Description</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">About of Book</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>

                <div className="form-control mt-6 md:col-span-2 ">
                    <button className="p-3 rounded-lg bg-red-700 text-white font-semibold text-lg font-poppins">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;