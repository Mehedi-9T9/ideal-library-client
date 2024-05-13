import { FaGoogle, FaGithub } from "react-icons/fa";
import useProvider from "../../Provider/useProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'


const Login = () => {
    const { loginUser, googleLogin, githubLogin } = useProvider()
    const location = useLocation()
    const from = location.state || "/"
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        loginUser(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate(from)
                Swal.fire({
                    // position: "top",
                    icon: "success",
                    title: "Your Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    // title: "Oops...",
                    text: errorMessage,

                });
            });

    }
    const googleHandle = () => {
        googleLogin()
            .then((result) => {

                const user = result.user;
                console.log(user);
                Swal.fire({
                    // position: "top",
                    icon: "success",
                    title: "Your Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    // title: "Oops...",
                    text: errorMessage,

                });

            });
    }
    const githubHandle = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    // position: "top",
                    icon: "success",
                    title: "Your Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from)


            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    // title: "Oops...",
                    text: errorMessage,

                });

            });
    }
    return (
        <div className='bg-[#FEF3F0] container mx-auto my-10 drop-shadow-md flex flex-col-reverse md:flex-row items-center justify-center gap-x-20 p-10 rounded-xl'>
            <div className="mb-5 md:mb-0">
                <h2 className="text-center text-5xl font-bold text-black py-10">Login Now!</h2>
                <form onSubmit={handleLogin} className=" space-y-4">
                    <div className="form-control">

                        <input type="email" name="email" placeholder="Email" className="input focus:outline-[#E68371] text-[#B09CA0] font-platypi" required />
                    </div>
                    <div className="form-control">

                        <input type="password" name="password" placeholder="password" className="input focus:outline-[#E68371] text-[#B09CA0] font-platypi" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-[#B09CA9]">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#E68371] text-white font-semibold text-lg">Login</button>
                    </div>
                </form>
                <p className="text-[#B09CA9] font-poppins text-center">New User  <Link to="/rejister" className="font-platypi font-bold">Go Rejister</Link></p>
                <div className="flex gap-5 justify-center items-center mt-3">
                    <button onClick={googleHandle} className="btn bg-white drop-shadow-sm "><FaGoogle /></button>
                    <button onClick={githubHandle} className="btn bg-white drop-shadow-sm"><FaGithub /></button>

                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/k3qWYNW/The-Little-Things-Working.png" alt="" />
            </div>

        </div>
    );
};

export default Login;