import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {
    const { signIn,GoogleLogin,GithubLogin } = useContext(AuthContext);
    
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { email, password };
        console.log(userInfo);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                if(result.user){
                    Swal.fire({
                        icon:'success',
                        title: "User login successfully",
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                }
            })
            .then(error => {
                console.error(error);

            })
    }

    const handleGoogleLogin=()=>{

        GoogleLogin()
        .then(result=>{
        console.log(result.user);
        })
        .then(error=>{
        console.error(error);
        })    
    }

    const handleGithubLogin=()=>{
        GithubLogin()
        .then(result=>{
            console.log(result.user);
        })
        .then(error=>{
            console.error(error);
            
        })
    }

    
    return (
        <div>
            <div className="hero bg-cyan-800 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse  w-full">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignIn} className="card-body bg-teal-600 rounded-lg">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className=" flex justify-center text-3xl space-x-3 mt-6">
                                 <button type="button" onClick={handleGoogleLogin}> <FaGoogle></FaGoogle></button>
                                 <button type="button" onClick={handleGithubLogin} ><FaGithub ></FaGithub></button>
                            </div>
                            <div className="flex my-2">
                                <p className="text-xs">Already have an account?</p>

                                <Link className="text-blue-800 text-xs mr-8" to='/register'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;