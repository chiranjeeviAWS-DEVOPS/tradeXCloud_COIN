import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetForgotPasswordAPIMutation } from "../Services/apiList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Loader from "../components/Loader";

function ForgotPassword() {
    const navigate = useNavigate();
    const [forgotPwdAPI, responseForgotPwd] = useGetForgotPasswordAPIMutation();
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        email: yup.string().email('Please type valid email').required('Email is required'),
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

            };
            forgotPwdAPI(postData).then((res) => {
                console.log('postres:', res);
                if (res?.error?.data?.message) {
                    toast.error(res?.error?.data?.message)
                    setIsLoading(false);
                }
                else if (res?.data?.message) {
                    setIsLoading(false);
                    console.log("res", res);
                    toast.success(res?.data?.message)
                    setTimeout(() => navigate('/newpassword'), 2000);

                }
            });
        }
    });

    return (
        <div className="w-full">
             <ToastContainer></ToastContainer>
            <div className="relative w-[calc(100%)] h-[calc(100vh)]">
                <img className="w-[calc(100%)] h-[calc(100vh)] " src="./login/backdrop.png" alt="background image" />
            </div>
            <div className="absolute top-0 opacity-70 w-[calc(100%)] h-[calc(100vh)] bg-gray-600"></div>
            <div className="absolute top-16 mt-6 lg:mt-0 w-full h-[calc(80%)] flex justify-center items-center">
                <div className="w-full rounded-lg lg:mx-8">
                    {/* Login card container starts*/}
                    <div className="flex flex-col items-center lg:flex-row ">
                        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative rounded-l-[0.75rem] flex justify-center">
                            <img className="w-full h-full object-cover rounded-l-[0.75rem]" src="./login/backdrop.png" alt="login card image" />
                        </div>
                        <div className="w-full md:w-1/2 h-[80vh] bg-gradient-to-br from-[#0C0F0B] to-[#0F4D23] lg:rounded-r-[0.75rem] lg:w-1/2 p-5 flex justify-center items-center">
                           
                        {isLoading && <Loader />}
                            <div className="w-full md:w-[calc(40vh)] lg:w-[calc(50vh)] ">
                                <div className="text-center ">    
                                    <h1 className="text-[#E1E3DD] text-[2.5rem] roboto-bold">Forget Password </h1>
                                    <p className="text-[#E1E3DD] text-[1rem] roboto-regular">Password reset link will sent to the registered email </p>
                                </div> 
                                <form className="my-[1.5rem]" onSubmit={formik.handleSubmit}>
                                    <label htmlFor="email" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">email</label><br></br>
                                    <input className="w-full py-4 mt-2 px-5 border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                        type="email"
                                        name="email"
                                        placeholder="johnjoe@gmail.com"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && formik.touched.email ? (
                                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                    ) : null}

                                    <div className="my-[calc(24px)]">
                                        <button className="capitalize bg-[#96D59D] text-[#003915] w-full  py-[calc(12px)] rounded-[calc(100px)] text-[0.875rem] roboto-medium" type="submit">submit</button>
                                    </div>
                                </form>



                                
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



export default ForgotPassword;