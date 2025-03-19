import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { signUp, sendOtp } from '../services/operations/authAPI';
import { GiStopwatch } from "react-icons/gi";

export const VerifyEmail = () => {
    const {signupData, loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");

    useEffect(() => {
        if(!signupData){
            navigate("/signup")
        }
    },[])

    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    } = signupData

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate))
    }

  return (
    <div className='flex flex-col items-center gap-4 mt-12'>
        {
            loading ? 
            (<div>Loading...</div>) : 
            (
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl text-richblue-5 font-bold'>Verify Email</h1>
                    <p className='text-sm text-richblack-300'>Verify your email address to complete the signup process</p>
                    
                    <form onSubmit={handleOnSubmit}
                    className='flex flex-col gap-4 w-full max-w-[500px] text-white'>
                        <OTPInput 
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        separator={<span>-</span>}
                        renderInput={(props) => <input {...props} placeholder='-'
                        className='bg-richblack-800 p-[20px] mt-2 !text-white rounded-[8px]' />}
                        // inputStyle='rounded-[8px] bg-richblack-800 p-[20px] mt-2 !text-white'
                        containerStyle='flex justify-between w-full gap-2'
                        separatorStyle='text-richblack-5'
                        />

                        <button type='submit'
                        className=' w-full mt-2 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900'>
                            Verify Email
                        </button>
                    </form>

                    <div className='flex justify-between w-full mt-4'>
                        <div className='flex items-center gap-1 text-sm text-richblack-300'>
                            <Link to="/login" 
                            className='flex items-center gap-1 text-sm text-richblack-300'>
                                <FaArrowLeftLong />
                                <p >Back to Login</p>
                            </Link>
                        </div>

                        <button onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                            className='flex gap-1 items-center text-sm text-richblack-300 flex-row'>
                            <GiStopwatch />
                            <p className='text-yellow-300 text-sm'>Resend OTP</p>
                        </button>
                    </div>
                </div>
            )
        }
    </div>
  )
}
