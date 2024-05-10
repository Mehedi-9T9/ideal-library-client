import React from 'react';

const Rejister = () => {
    return (
        <div className='bg-[#FEF3F0] container mx-auto md:flex items-center justify-center gap-10 my-10 rounded-xl'>
            <div>
                <img src="https://i.ibb.co/wBJMscz/The-Little-Things-UI-Design.png" alt="" />
            </div>
            <div>
                <form className="card-body grid grid-cols-2 gap-x-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input focus:outline-[#83BB9E]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Photo URL</span>
                        </label>
                        <input type="url" placeholder="Img URL" className="input focus:outline-[#83BB9E]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input focus:outline-[#83BB9E]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold font-platypi text-[#B09CA9]">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />

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