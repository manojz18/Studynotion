import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FaArrowLeftLong } from "react-icons/fa6";

export const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }

  return (
    <div className='absolute left-[40%] top-[30%] flex justify-center items-center text-white w-[350px]'>
        {
            loading ? (
                <div>Loading...</div>
            ) : 
            (
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>
                        {
                            !emailSent ? "Reset your Password" : "Check your Email"
                        }
                    </h1>

                    <p className='text-sm text-richblack-300'>
                        {
                            !emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont gave access to your email we can try account recovery"
                            : `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                        {
                            !emailSent && (
                                <label className='flex flex-col gap-1'>
                                    <p>Email Address</p>
                                    <input required
                                    type='emial'
                                    value={email}
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Email Address'
                                    className='w-full rounded-[0.5rem] bg-richblack-800 p-[7px] text-richblack-5'/>
                                </label>
                                
                            )
                        }

                        <button
                        className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900'
                        type='submit'>
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login" 
                        className='flex items-center gap-1 text-sm text-richblack-300'>
                            <FaArrowLeftLong />
                            <p >Back to Login</p>
                        </Link>
                    </div>

                </div>
            )
        }
    </div>
  )
}
