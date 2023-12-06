import { useEffect } from "react";

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex justify-center py-24 bg-gradient-to-r from-sky-300 via-white to-sky-300">
            <div>
                <h3 className="font-bold text-5xl py-4 text-center">Login Now !</h3>
                <div className="w-96 card shrink-0  shadow-2xl bg-fuchsia-500">

                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white  font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white  font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;