import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'
import { Fade } from "react-awesome-reveal";


const Login = () => {
    const { user, setUser, signIn, GoogleLogin, GithubLogin } = useContext(AuthContext);
    const [correct, setIncorrect] = useState('');
    console.log(correct);
    const location = useLocation();
    const navigate = useNavigate();



    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { email, password };
        console.log(userInfo);
        
     setIncorrect('');

        if (user.email  !== userInfo.email && user.password !== userInfo.password) {
            setIncorrect('Email or password is incorrect');
        }
      


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
            <div className="text-center mt-36 text-blue-950">
                <Fade delay={2300} direction="up">
                    <h1 className="text-5xl font-serif">  Welcome to our tourism website!</h1>
                </Fade>
                <Fade delay={1700} direction="down">
                    <p> Please login to access your personalized experience. <br />
                        If you don't have an account, click the 'Sign up' button to create one.</p>
                </Fade>
            </div>
            <Fade delay={900} direction="right">
            <Fade  direction="right">
                 {
                        correct && <>
                            <div className="bg-orange-300 mt-4 absolute p-4 px-4 w-1/4 ml-[500px] text-center rounded-xl">
                                <p className="text-xl  ">{correct}</p>
                            </div>
                        </>

                    }
                 </Fade>
                <div className="login-box mb-40 relative ">

               
                    <Fade delay={1000} direction="left">
                        <h2 className="text-3xl">Login Now!</h2>
                    </Fade>
                    <form onSubmit={handleSignIn}>
                        <div className="user-box">
                            <input type="text" name="email" required="email" />
                            <label>EMAIL</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="password" required="password" />
                            <label>PASSWORD</label>
                        </div>
                        <Fade delay={1800} duration={1800} direction="right">
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <button>SUBMIT</button>
                            </a>
                        </Fade>

                        <div className=" flex justify-center  space-x-6 ">
                            <Fade delay={1600} direction="left">
                                <Link><button className="text-3xl" type="button" onClick={handleGoogleLogin}> <FaGoogle></FaGoogle></button>
                                </Link>
                            </Fade>
                            <Fade delay={1600} direction="right">
                                <Link> <button className="text-3xl" type="button" onClick={handleGithubLogin} ><FaGithub ></FaGithub></button></Link>
                            </Fade>
                        </div>
                        <Fade delay={1400} direction="up">
                            <p className="text-xs ml-24 mt-2  text-white">Already have an account?</p>
                        </Fade>

                        <Fade delay={1000} direction="down">
                            <p><Link className="text-white text-xs ml-24  " to='/register'>Sign up</Link></p>
                        </Fade>

                    </form>
                </div>
            </Fade>

        </div>
    );
};

export default Login;