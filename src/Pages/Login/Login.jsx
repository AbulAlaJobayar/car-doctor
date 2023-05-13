import { useContext } from 'react';
import photo from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProviders';
const Login = () => {


    const {SingIn}=useContext(AuthContext);

const handleSubmit=event=>{
    event.preventDefault();
    const form= event.target;
    const email=form.email.value;
    const password=form.password.value;
    SingIn(email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}


    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img src={photo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2 ml-12">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" 
                                name="email"
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" 
                                name='password'
                                placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>

                        </form>
                        <p className='my-4 text-center text-base'>New to car doctor? <Link to='/singup' className="text-[#FF3811] text-base font-bold">SingUP</Link></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;