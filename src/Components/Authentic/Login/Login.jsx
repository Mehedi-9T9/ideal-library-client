import { FaGoogle, FaGithub } from "react-icons/fa";
import useProvider from "../../Provider/useProvider";

const Login = () => {
    const { loginUser, googleLogin } = useProvider()
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
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    const googleHandle = () => {
        googleLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
                <div className="flex gap-5 justify-center items-center mt-3">
                    <button onClick={googleHandle} className="btn bg-white drop-shadow-sm "><FaGoogle /></button>
                    <button className="btn bg-white drop-shadow-sm"><FaGithub /></button>

                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/k3qWYNW/The-Little-Things-Working.png" alt="" />
            </div>

        </div>
    );
};

export default Login;