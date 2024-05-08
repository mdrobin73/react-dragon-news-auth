import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        // console.log(email, password);

        // Sign in a user------
        signIn(email, password)
        .then((result) => {
            e.target.reset();

            // Navigate after user login------
            navigate(location.state ? location.state : "/");
            console.log(result.user);

        })
        .catch((error) => {
            console.error(error);
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 font-semibold text-center">Please login</h2>

            <form onSubmit={handleLogin} className="lg:w-1/3 md:w-3/4 w-3/4 mx-auto">
                <div className="form-control">
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
            <p className="text-center my-3">Do not have an account? <Link className="font-semibold text-blue
            link" to={"/register"}>Register</Link></p>
        </div>
    );
};

export default Login;