import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";





const Register = () => {

    // const { createUser } = useContext(AuthContext);

    const { createUser } = useContext(AuthContext)

    const hendelRegster = e => {
        e.preventDefault();
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(userName, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendelRegster} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name </span>
                            </label>
                            <input type="text" placeholder="Your Name " name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>
                                You have account ? Please
                                <Link to="/login">
                                    <button className="btn btn-link">Register</button>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;