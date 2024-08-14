import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createUser, user, setUser, showPassword, setShowPassWord } = useContext(AuthContext);
    const [passError, setPassError] = useState('');
    console.log(user);



    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const userInfo = { name, email, password, photo };
        console.log(userInfo);

        // reset password
        setPassError('');

        // password validation
        if (password.length < 6) {
            setPassError('Password must have 6 characters or longer');
            return;
        }

        if (!/^(?=.*[A-Z]).+$/.test(password)) {
            setPassError('Password must have at least one upper-case letter ');
            return;
        }
        if (!/^(?=.*[a-z]).+$/.test(password)) {
            setPassError('Password must have at least one lower-case letter ');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                if (result.user) {
                    Swal.fire({
                        icon: 'success',
                        title: "User sign up successfully",
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
    return (
        <div>
            <div>
                <div className="hero bg-indigo-500 min-h-screen">
                    <div className=" hero-content flex-col lg:flex-row-reverse mt-24  w-full">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSignUp} className="card-body rounded-lg bg-teal-600">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className=" relative form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                                    <span className="absolute right-6 top-12" onClick={() => setShowPassWord(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>

                                    {
                                        passError && <small className="text-sm text-red-600">{passError}</small>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="photo" name='photo' placeholder="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                                <div className="flex my-2">
                                    <p className="text-xs">Already have an account?</p>

                                    <Link className="text-white text-xs mr-8" to='/login'>Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;