import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetloginAPIMutation } from "../Services/apiList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Loader from "../components/Loader";

function Login() {
    const navigate = useNavigate();
    //toggle state
    const [isToggleActive, setIsToggleActive] = useState(false);
    const [loginAPI, responseLogin] = useGetloginAPIMutation();
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        email: yup.string().email('Please type valid email').required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log('Submitting form...');
            setIsLoading(true);  // Make sure this is being triggered
            console.log('isLoading:', isLoading); // Debug line

            let postData = {
                email: values.email,
                password: values.password
            };
            loginAPI(postData).then((res) => {
                console.log('postres:', res);
                if (res?.error?.data?.message) {

                    toast.error(res?.error?.data?.message)


                    setIsLoading(false);
                }
                else if (res?.data?.token) {
                    setIsLoading(false);
                    console.log("res", res);
                    // Check if Remember Me is selected
                    if (isToggleActive) {
                        localStorage.setItem("myToken", res?.data?.token);
                        localStorage.setItem("AuthId", res?.data?.user?.id);
                    } else {
                        sessionStorage.setItem("myToken", res?.data?.token);
                        sessionStorage.setItem("AuthId", res?.data?.user?.id);
                    }
                    console.log("responseToken:", res?.data?.user?.id, res?.data?.token)
                    toast.success(res?.data?.message)
                    setTimeout(() => (window.location.href = "/"), 2000);
                }
            });
        }
    });

    // // On component mount, check if the user is already logged in
    // useEffect(() => {
    //     const token = localStorage.getItem("myToken") || sessionStorage.getItem("myToken");
    //     if (token) {
    //         navigate("/"); // If user is logged in, redirect to home
    //     }
    // }, [navigate]);



    console.log(isToggleActive);


    return (
        <div className="w-full">

            <ToastContainer></ToastContainer>
            <div className="relative w-[calc(100%)] h-[calc(100vh)]">
                <img className="w-[calc(100%)] h-[calc(100vh)]" src="./login/backdrop.png" alt="background image" />
            </div>
            <div className="absolute top-0 opacity-70 w-[calc(100%)] h-[calc(100vh)] bg-gray-600"></div>
            <div className="absolute top-16 mt-6 lg:mt-0 w-full h-[calc(80%)] flex justify-center items-center">

                <div className="w-full rounded-lg lg:mx-8">
                    {/* Login card container starts*/}
                    <div className="flex flex-col items-center lg:flex-row ">
                        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative rounded-l-lg flex justify-center">
                            <img className="w-full h-full object-cover lg:rounded-l-[0.75rem]" src="./login/backdrop.png" alt="login card image" />
                        </div>
                        <div className="w-full md:w-1/2 h-[80vh] bg-gradient-to-br from-[#0C0F0B] to-[#0F4D23] lg:rounded-r-lg lg:w-1/2 p-5 flex justify-center items-center">
                            {isLoading && <Loader />}
                            <div className="w-full md:w-[calc(40vh)] lg:w-[calc(50vh)] ">
                                <div className="flex justify-center">
                                    <img src="/logo.png" alt="" className="" />
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="">
                                        <label htmlFor="email" className="capitalize text-xl text-[#E1E3DD] roboto-regular">email / username</label><br></br>
                                        <input className="w-full py-4 mt-2 px-5 border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                            type="email"
                                            name="email"
                                            placeholder="johnjoe@gmail.com"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        {formik.errors.email && formik.touched.email ? (
                                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                        ) : null}                                    </div>

                                    <div className="mt-[calc(16px)]">
                                        <label htmlFor="password" className="capitalize text-x text-[#E1E3DD] roboto-regular">password</label><br></br>
                                        <input className="w-full py-4 mt-2 px-5 border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        {formik.errors.password && formik.touched.password ? (
                                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                        ) : null}

                                        <div className="flex justify-end">
                                            <div className="">
                                                <Link className="capitalize text-[0.875rem] roboto-regular text-[#E1E3DD] font-[calc(400)]" to="/forgotpassword">forgot password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input onChange={() => setIsToggleActive(!isToggleActive)} type="checkbox" value="" className="sr-only peer" />
                                            <div className={isToggleActive ? `relative w-11 h-6 bg-loginToggleActive  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-loginToggleActive peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-loginToggleActive` : `relative w-11 h-6 bg-black  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-loginToggleActive peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-loginToggleActive`}></div>
                                            <span className="ms-3  text-[#E1E3DD] text-[calc(16px)] font-medium capitalize ">remember me</span>
                                        </label>
                                    </div>
                                    <div className="my-[calc(24px)]">
                                        <button className="capitalize roboto-medium bg-[#96D59D] text-[#003915] w-full  py-[calc(12px)] rounded-[calc(100px)]">sign in</button>
                                    </div>
                                </form>
                                <div className="flex items-center justify-center">
                                    {
                                        <hr className="border-[1px] border-[#414940] h-[calc(0.5px)] w-[calc(179px)]"></hr>
                                    }

                                    <h1 className="uppercase mx-2 text-[#C0C9BD] text-center text-[1rem] roboto-regular ">or</h1>

                                    {
                                        <hr className="border-[1px] border-[#414940] h-[calc(0.5px)] w-[calc(179px)]"></hr>
                                    }
                                </div>
                                {/* <div className="mt-[calc(12px)] w-full flex justify-center">
                                    <button className="flex items-center w-fit lg:w-1/2 border-[calc(1px)] border-loginInputBorder p-[calc(12px)] mr-2 rounded-lg">
                                        <img className="w-[calc(32px)] h-[calc(32px)]" src="./login/googleLogo.png" alt="google logo" />
                                        <h1 className="capitalize hidden lg:block ml-[calc(12px)] font-[calc(400)] text-[calc(12px)]">sign in with <span className="font-semibold">google</span></h1>
                                    </button>
                                    <button className="inline-flex items-center w-fit lg:w-1/2  border-[calc(1px)] border-loginInputBorder p-[calc(12px)] ml-2 rounded-lg">
                                        <img className="w-[calc(32px)] h-[calc(32px)]" src="./login/appleLogo.png" alt="google logo" />
                                        <h1 className="capitalize hidden lg:block ml-[calc(12px)] font-[calc(400)] text-[calc(12px)]">sign in with <span className="font-semibold">apple</span></h1>
                                    </button>

                                </div> */}
                                <div className="mt-5">
                                    <h1 className="capitalize text-[calc(16px)] text-center text-[#E1E3DD]">new user ? <Link to="/register" className="text-[#96D59D] underline">register here</Link></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Login card container ends*/}


                </div>

            </div>

            <div className="w-full py-5 px-5 bg-[#191C19] text-[#C0C9BD] flex items-center justify-between">
                <div className="">
                    <h1 className="capitalize">© 2024 stock AI. all rights reserved</h1>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex">
                        <li className="capitalize ml-[calc(16px)]"><Link to="#">terms</Link></li>
                        <li className="capitalize ml-[calc(16px)]"><Link to="#">privacy</Link></li>
                        <li className="capitalize ml-[calc(16px)]"><Link to="#">cookies</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default Login;