import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetRegisterVerifyAPIMutation } from "../Services/apiList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Loader from "../components/Loader";

function Verification() {
    // Create refs for the input fields
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (e, index) => {
        const { value } = e.target;

        // Update the formik value based on input index
        const newCode = formik.values.code.split('');
        newCode[index] = value;
        formik.setFieldValue('code', newCode.join(''));

        // Move focus to the next input if a digit is entered
        if (value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }

        // Move focus to the previous input if the value is deleted and it's not the first input
        if (!value && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const [VerifyPwdAPI, responseVerifyPwd] = useGetRegisterVerifyAPIMutation();
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        email: yup.string().email('Please type valid email').required('Email is required'),
        code: yup.string().required('Reset Code is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            code: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log('Submitting form...');
            setIsLoading(true);  // Make sure this is being triggered
            console.log('isLoading:', isLoading); // Debug line

            let postData = {
                email: values.email,
                code: values.code

            };
            VerifyPwdAPI(postData).then((res) => {
                console.log('postres:', res);
                if (res?.error?.data?.message) {
                    toast.error(res?.error?.data?.message)
                    setIsLoading(false);
                }
                else if (res?.data?.message) {
                    setIsLoading(false);
                    console.log("res", res);
                    toast.success(res?.data?.message)
                    setTimeout(() => (window.location.href = "/login"), 2000);
                }
            });
        }
    });

    console.log("formikErrors:", formik.errors)
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
                        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative rounded-l-[0.75rem] flex justify-center">
                            <img className="w-full h-full object-cover rounded-l-[0.75rem]" src="./login/backdrop.png" alt="login card image" />
                        </div>
                        <div className="w-full md:w-1/2 h-[80vh] bg-gradient-to-br from-[#0C0F0B] to-[#0F4D23] lg:rounded-r-[0.75rem] lg:w-1/2 p-5 flex justify-center items-center">
                        {isLoading && <Loader />}
                           
                            <div className="w-full md:w-[calc(40vh)] lg:w-[calc(60vh)] ">
                                <div className="text-center ">    
                                    <h1 className="text-[#E1E3DD] text-[2.5rem] roboto-bold">Enter Verification Code</h1>
                                    <p className="text-[#E1E3DD] text-[1rem] roboto-regular">Verification code sent to your mail id john*****.com</p>
                                    
                                </div> 
                                <div className="my-[1.5rem]">
                                    <form id="otp-form" onSubmit={formik.handleSubmit}>
                                        <label htmlFor="email" className="capitalize text-xl text-[#E1E3DD]">email</label><br></br>
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

                                        <label htmlFor="otp" className="capitalize text-xl text-[#E1E3DD]">OTP</label><br></br>
                                        <div className="flex items-center justify-center gap-3">
                                            {inputRefs.map((ref, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    className="w-14 h-14 text-center text-2xl bg-[#414940] rounded-[0.5rem] text-[#E1E3DD]"
                                                    maxLength="1"
                                                    ref={ref}
                                                    name="code"
                                                    //         onChange={formik.handleChange}
                                                    // value={formik.values.code}
                                                    onChange={(e) => handleChange(e, index)}
                                                    value={formik.values.code[index] || ''}  // Bind the value to formik
                                                    // pattern="\d*"
                                                />
                                            ))}
                                        </div>
                                        <div className="my-[calc(24px)]">
                                            <button className="capitalize bg-[#96D59D] text-[#003915] w-full  py-[calc(12px)] rounded-[calc(100px)] roboto-medium" type="submit">verify</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="">
                                    <p className="text-[#E1E3DD] text-[1rem] text-center roboto-regular">Didn’t Receive the code ? <a className="text-[#96D59D]" href="/">Send again</a></p>
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



export default Verification;