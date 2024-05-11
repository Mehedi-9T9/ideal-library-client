import { useForm } from "react-hook-form"
import useProvider from "../../Provider/useProvider";
import axios from "axios";
const AddBook = () => {
    const { users } = useProvider()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        const email = users.email
        const newdata = { ...data, email }
        console.log(newdata)
        axios.post('http://localhost:5000/addBook', newdata)
            .then(res => console.log(res.data))

    }
    return (
        <div className='container mx-auto bg-[#FEF3F0] md:my-20 rounded-xl drop-shadow-md'>
            <h2 className='text-3xl font-platypi font-semibold text-center pt-10  text-[#C20E1A]'>Add Your <span className='text-black'> Book</span></h2>
            <p className='text-center font-poppins text-[#B09CA9] my-5 px-5'> You present Your self with book, You present Your self with book, You present Your self with book,  </p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:grid grid-cols-2 gap-x-10 px-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Book Name</span>
                    </label>
                    <input type="text" {...register("bookName", { required: true })} placeholder="Book Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Quantity</span>
                    </label>
                    <input type="number" {...register("quantity", { valueAsNumber: true }, { required: true })} placeholder="1" className="input input-bordered  bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Author Name</span>
                    </label>
                    <input type="text" {...register("authorName", { required: true })} placeholder="Author Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Category</span>
                    </label>
                    <select name="category" {...register("category", { required: true })} id="" className='p-3 rounded-lg '>
                        <option value="romantic">Romantic</option>
                        <option value="history">History</option>
                        <option value="religion">Religion</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Rating</span>
                    </label>
                    <input type="number" {...register("rating", { valueAsNumber: true }, { required: true })} min={1} max={5} placeholder="Author Name" className="input input-bordered bg-[#fff]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Photo</span>
                    </label>
                    <input type="url" {...register("photo", { required: true })} placeholder=" Img URL" className="input input-bordered bg-[#fff]" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">About of Book</span>
                    </label>
                    <textarea {...register("about", { required: true })} className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>

                <div className="form-control mt-6 md:col-span-2 ">
                    <button className="p-3 rounded-lg bg-red-700  text-white font-semibold text-lg font-poppins">Add Book</button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;