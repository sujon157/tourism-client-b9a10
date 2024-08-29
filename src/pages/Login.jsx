import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'


const Login = () => {
    const { setUser, signIn, GoogleLogin, GithubLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

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

                setUser(result.user);
                navigate(location?.state ? location.state : '/');
                if (result.user) {
                    Swal.fire({
                        icon: 'success',
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

    const handleGoogleLogin = () => {

        GoogleLogin()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        GithubLogin()
            .then(result => {
                console.log(result.user);
                setUser(result.user);

                navigate(location?.state ? location.state : '/');
            })
            .then(error => {
                console.error(error);

            })
    }


    return (
        <div className="border bg-slate-100">
           <p className="text-center mt-32 text-blue-950">
          <span className="text-4xl font-serif">  Welcome to our tourism website!</span> <br /> Please login to access your personalized experience. <br />
            If you don't have an account, click the 'Sign up' button to create one.
           </p>

            <div className="login-box ">
                <h2 className="text-3xl">Login Now!</h2>
                <form onSubmit={handleSignIn}>
                    <div className="user-box">
                        <input type="text" name="email"  required="email" />
                        <label>EMAIL</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password"  required="password" />
                        <label>PASSWORD</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button>SUBMIT</button>
                    </a>

                    <div className=" flex justify-center  space-x-6 ">
                        <Link><button className="text-3xl" type="button" onClick={handleGoogleLogin}> <FaGoogle></FaGoogle></button>
                        </Link>
                        <Link> <button className="text-3xl" type="button" onClick={handleGithubLogin} ><FaGithub ></FaGithub></button></Link>
                    </div>

                    
                        <p className="text-xs ml-24 mt-2  text-white">Already have an account?</p>

                        <p><Link className="text-white text-xs ml-24  " to='/register'>Sign up</Link></p>
                
                </form>
            </div>
        
        </div>
    );
};

export default Login;