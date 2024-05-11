import { useForm } from "react-hook-form"
import useProvider from "../../Provider/useProvider";

const Rejister = () => {
    const { createUser } = useProvider()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()


    const onSubmit = (data) => {
        const { email, password } = data
        createUser(email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className='bg-[#FEF3F0] container mx-auto md:flex items-center justify-center gap-10 my-10 rounded-xl'>
            <div>
                <img src="https://i.ibb.co/wBJMscz/The-Little-Things-UI-Design.png" alt="" />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body grid grid-cols-2 gap-x-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="input focus:outline-[#83BB9E]" />
                        {errors.name && <span className="text-red-700 font-medium">This field is required</span>}

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Photo URL</span>
                        </label>
                        <input type="url" {...register("photo", { required: true })} placeholder="Img URL" className="input focus:outline-[#83BB9E]" />
                        {errors.photo && <span className="text-red-700 font-medium">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="input focus:outline-[#83BB9E]" />
                        {errors.email && <span className="text-red-700 font-medium">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Password" className="input input-bordered" />
                        {errors.password && <span className="text-red-700 font-medium">This field is required</span>}

                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button className="btn bg-[#83BB9E] text-lg font-poppins text-white">Rejister</button>
                    </div>
                </form>
            </div>


        </div>
    )
};

export default Rejister;