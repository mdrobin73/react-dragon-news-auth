import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photoUrl = form.get("photoUrl");
        const email = form.get("email");
        const password = form.get("password");
        // console.log(name, photoUrl, email, password);

        // Create user-----
        createUser(email, password)
        .then((userCredentials) => {
            e.target.reset();
            navigate("/");
            console.log("Successfully registered!", userCredentials.user);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-10 font-semibold text-center">Please Register</h2>

            <form onSubmit={handleRegister} className="lg:w-1/3 md:w-3/4 w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center my-3">Already have an account? <Link className="font-semibold text-blue
            link" to={"/login"}>Login</Link></p>
        </div>
    );
};

export default Register;