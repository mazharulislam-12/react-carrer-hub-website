import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const Register = () => {

    // const { createUser } = useContext(AuthContex);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center font-semibold mt-4">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/3 mx-auto bg-gray-200 mt-10 rounded-lg">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Phot URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Phot URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-base mt-5 text-center">Allready have an account <Link className="text-blue-600 font-semibold" to='/login'>Login</Link> </p>
            </div>

        </div>
    );
};

export default Register;