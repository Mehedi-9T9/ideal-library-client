import { useForm } from "react-hook-form"
import useProvider from "../../Provider/useProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
    const { users } = useProvider()
    const updateData = useLoaderData()
    const { bookName, rating, photo, category, authorName, description, _id, returnDate, quantity, about } = updateData
    console.log(updateData);
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
            <h2 className='text-3xl font-platypi font-semibold text-center pt-10  text-[#C20E1A]'>Update Your <span className='text-black'> Book</span></h2>
            <p className='text-center font-poppins text-[#B09CA9] my-5 px-5'> You present Your self with book, You present Your self with book, You present Your self with book,  </p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body md:grid grid-cols-2 gap-x-10 px-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Book Name</span>
                    </label>
                    <input type="text" defaultValue={bookName} {...register("bookName", { required: true })} className="input input-bordered bg-[#fff]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Quantity</span>
                    </label>
                    <input type="number" defaultValue={quantity} {...register("quantity", { valueAsNumber: true }, { required: true })} className="input input-bordered  bg-[#fff]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Author Name</span>
                    </label>
                    <input type="text" defaultValue={authorName} {...register("authorName", { required: true })} className="input input-bordered bg-[#fff]" />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Category</span>
                    </label>
                    <select name="category" defaultValue={category} {...register("category", { required: true })} id="" className='p-3 rounded-lg '>
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
                    <input type="number" defaultValue={rating} {...register("rating", { valueAsNumber: true }, { required: true })} min={1} max={5} className="input input-bordered bg-[#fff]" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Photo</span>
                    </label>
                    <input type="url" defaultValue={photo} {...register("photo", { required: true })} className="input input-bordered bg-[#fff]" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">Description</span>
                    </label>
                    <textarea defaultValue={description} {...register("description", { required: true })} className="textarea textarea-primary" ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-platypi">About of Book</span>
                    </label>
                    <textarea defaultValue={about} {...register("about", { required: true })} className="textarea textarea-primary" ></textarea>
                </div>

                <div className="form-control mt-6 md:col-span-2 ">
                    <button className="p-3 rounded-lg bg-red-700  text-white font-semibold text-lg font-poppins">Update Book</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;