import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetRegisterAPIMutation } from "../Services/apiList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Loader from "../components/Loader";

function Register() {
    const navigate = useNavigate();
    const [isToggleActive, setIsToggleActive] = useState(false);
    const [RegisterAPI, responseRegister] = useGetRegisterAPIMutation();
    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object().shape({
        firstname: yup.string().required('Firstname is required'),
        lastname: yup.string().required('Lastname is required'),
        email: yup.string().email('Please type valid email').required('Email is required'),
        password: yup.string().required('Password is required'),
        phone_number: yup.string().matches(/^[0-9]{10}$/, 'Phone number is not valid').required("Phone number is required"),
        // Password: Yup.string()
        //   .min(10, 'Password atleast 10 letter with combination of letters and numbers')
        //   .max(15, 'Password atleast 15 letter with combination of letters and numbers')
        //   .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must contain letters and numbers')
        //   .required('Password is required'),
        CPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
        // CountryCode: Yup.string().required('Company CountryCode is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone_number: '',
            CPassword: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log('Submitting form...');
            setIsLoading(true);  // Make sure this is being triggered
            console.log('isLoading:', isLoading); // Debug line

            let postData = {
                email: values.email,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,
                phone_number: values.phone_number,
            };
            RegisterAPI(postData).then((res) => {
                console.log('postres:', res);
                if (res?.error?.data?.message) {

                    toast.error(res?.error?.data?.message)


                    setIsLoading(false);
                }
                else if (res?.data?.message) {
                    setIsLoading(false);
                    console.log("res", res);
                    toast.success(res?.data?.message)
                    setTimeout(() => (window.location.href = "/verify"), 2000);

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
                        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] relative rounded-l-lg flex justify-center">
                            <img className="w-full h-full object-cover lg:rounded-l-[0.75rem]" src="./login/backdrop.png" alt="login card image" />
                        </div>
                        <div className="w-full md:w-1/2 h-[80vh] bg-gradient-to-br from-[#0C0F0B] to-[#0F4D23] lg:rounded-r-[0.75rem] lg:w-1/2 p-5 flex justify-center items-center">
                            {isLoading && <Loader />}
                            <div className="w-full md:w-[calc(40vh)] lg:w-[calc(60vh)] ">
                                <div className="flex justify-center">
                                    <img src="/logo.png" alt="" className="" />
                                </div>

                                <div className="h-[65vh] overflow-y-auto no-scrollbar ">
                                    <form onSubmit={formik.handleSubmit}>

                                        <div className="w-full ">
                                            {/* form first name and last name contaier */}
                                            <div className="grid grid-cols-2 gap-[1rem]">
                                                <div className="col-span-1">
                                                    <label htmlFor="firstname" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">first name</label><br></br>
                                                    <input type="text" placeholder="John" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="firstname"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.firstname}
                                                    />
                                                    {formik.errors.firstname && formik.touched.firstname ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-span-1">
                                                    <label htmlFor="lastname" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">last name</label><br></br>
                                                    <input type="text" placeholder="Doe" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="lastname"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.lastname}
                                                    />
                                                    {formik.errors.lastname && formik.touched.lastname ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* form email address and phone number container */}
                                            <div className="">
                                                <div className="mt-[0.5rem]">
                                                    <label htmlFor="email" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">email</label><br></br>
                                                    <input type="Email" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="email"
                                                        placeholder="johnjoe@gmail.com"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.errors.email && formik.touched.email ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                                    ) : null}
                                                </div>

                                                <div className="mt-[0.5rem]">
                                                    <label htmlFor="email" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">phone number</label><br></br>
                                                    <input type="number" placeholder="Phone" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="phone_number"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.phone_number}
                                                    />

                                                    {formik.errors.phone_number && formik.touched.phone_number ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.phone_number}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            {/* password and re-enter password container */}
                                            <div className="grid grid-cols-2 gap-[1rem] mt-[0.5rem]">
                                                <div className="col-span-1">
                                                    <label htmlFor="email" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">Password</label><br></br>
                                                    <input placeholder="Password" type="password" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="password"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.password}
                                                        autoComplete="new-password"
                                                    />
                                                    {formik.errors.password && formik.touched.password ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                                    ) : null}
                                                </div>
                                                <div className="col-span-1">
                                                    <label htmlFor="email" className="capitalize text-[1.375rem] text-[#E1E3DD] roboto-regular">Re-Enter Password</label><br></br>
                                                    <input placeholder="Password" type="password" className="w-full py-4 mt-2 px-5 roboto-regular border-[calc(0.5px)] border-loginInputBorder rounded-md bg-[#111411] focus:outline-none text-[#E1E3DD]"
                                                        name="CPassword"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.CPassword}
                                                        autoComplete="new-password"
                                                    />
                                                    {formik.errors.CPassword && formik.touched.CPassword ? (
                                                        <div className="text-red-500 text-sm">{formik.errors.CPassword}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-[calc(24px)]">
                                            <button className="capitalize bg-[#96D59D] text-[#003915] w-full  py-[calc(12px)] rounded-[calc(100px)] roboto-medium" type="submit">Register</button>
                                        </div>

                                    </form>
                                    <div className="flex items-center justify-center">
                                        {
                                            <hr className="border-[1px] border-[#414940] h-[calc(0.5px)] w-[calc(179px)]"></hr>
                                        }

                                        <h1 className="uppercase mx-2 text-[#C0C9BD] text-center ">or</h1>
                                        {
                                            <hr className="border-[1px] border-[#414940] h-[calc(0.5px)] w-[calc(179px)]"></hr>
                                        }
                                    </div>
                                    <div className="mt-[calc(12px)] w-full flex justify-center">
                                        <button className="flex items-center w-fit lg:w-1/2 border-[calc(1px)] border-loginInputBorder p-[calc(12px)] mr-2 rounded-lg">
                                            <img className="w-[calc(32px)] h-[calc(32px)]" src="./login/googleLogo.png" alt="google logo" />
                                            <h1 className="capitalize hidden text-[#E1E3DD] lg:block ml-[calc(12px)] font-[calc(400)] text-[0.875rem]">sign in with <span className="font-semibold">google</span></h1>
                                        </button>
                                        <button className="inline-flex items-center w-fit lg:w-1/2  border-[calc(1px)] border-loginInputBorder p-[calc(12px)] ml-2 rounded-lg">
                                            <img className="w-[calc(32px)] h-[calc(32px)]" src="./login/appleLogo.png" alt="google logo" />
                                            <h1 className="capitalize hidden text-[#E1E3DD] lg:block ml-[calc(12px)] font-[calc(400)] text-[0.875rem]">sign in with <span className="font-semibold">apple</span></h1>
                                        </button>

                                    </div>
                                    <div className="mt-5">
                                        <h1 className="capitalize text-[1rem] text-center text-[#E1E3DD]">Already have an account ?<Link to="#" className="text-[#96D59D] underline ml-1">Sign in here</Link></h1>
                                    </div>
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



export default Register;