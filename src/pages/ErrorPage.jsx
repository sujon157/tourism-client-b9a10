import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="text-center mt-32 space-y-4">
            <h2>Oopps!!!</h2>
            <p>{ error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className="text-2xl"> 404 Page not found</h3>
                    <p className="mt-2">Go back where you from </p>
                    <Link to='/'>    <button className="bg-[#23BE0A] font-bold px-5 p-2 mt-3 rounded-xl text-white">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;