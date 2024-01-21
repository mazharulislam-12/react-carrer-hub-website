import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));

    }
    return (

        <>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center font-semibold mt-4">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/3 mx-auto bg-gray-200 mt-10 rounded-lg">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-base mt-5 text-center">Don't have an account <Link className="text-blue-600 font-semibold" to='/register'>Register</Link> </p>
            </div>

        </>
    );
};

export default Login;