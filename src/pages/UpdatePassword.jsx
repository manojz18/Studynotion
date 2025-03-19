import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { useLocation } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

export const UpdatePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password:"",
        confirmPassword: ""
    }) 

    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1)
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }
  return (
    <div className='flex flex-col items-center gap-4 mt-12'>
        {
            loading ? (
                <div>Spinner</div>
            ) : 
            (
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-white mt-8 text-[26px] font-bold'>Choose new Password</h1>
                    <p className='text-sm text-richblack-300'>Alomost done. Enter your new password and youre all set.</p>

                    <form onSubmit={handleOnSubmit} 
                    className='flex flex-col gap-4 w-full max-w-[500px]'>
                        <label className='flex items-center gap-2 text-white'>
                            <p>New Password</p>
                            <input
                            required
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleOnChange}
                            placeholder='Password'
                            className=' rounded-[0.5rem] bg-richblack-800 p-[7px] text-richblack-5'
                            />

                            <span onClick={() => setShowPassword((prev) => !prev)}>
                                {
                                    showPassword ? 
                                    <AiFillEyeInvisible fontSize={24} /> 
                                    : <AiFillEye fontSize={24}/>
                                }
                            </span>
                        </label>

                        <label className='flex items-center gap-2 text-white'>
                            <p>Confirm Password</p>
                            
                            <input
                            required
                            name='confirmPassword'
                            value={confirmPassword}
                            type={showConfirmPassword ? 'text' : 'password'}
                            onChange={handleOnChange}
                            placeholder='Confirm Password'
                            className=' rounded-[0.5rem] bg-richblack-800 p-[7px] text-richblack-5'
                            />

                            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                {
                                    showConfirmPassword ? 
                                    <AiFillEyeInvisible fontSize={24} /> 
                                    : <AiFillEye fontSize={24}/>
                                }
                            </span>
                        </label>

                        <button type='submit'
                        className='mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900'>
                            Reset Password
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
