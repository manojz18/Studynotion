import React, { useEffect } from 'react'
import {apiConnector} from '../../services/apiConnector'
import CountryCode from '../../data/countrycode.json'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { contactusEndpoint } from '../../services/apis'

export const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    console.log(data)
    try{
      setLoading(true)
      const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      console.log(response)
      setLoading(false)
    }catch(error){
      console.log("error: ", error)
      setLoading(false)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [isSubmitSuccessful, reset])
  
  return (
    <form onSubmit={handleSubmit(submitContactForm)}>

      <div>
        {/* first name */}

        <div>
          <label htmlFor='firstName'>First Name</label>
          <input
            type="text"
            name='firstName'
            id='firstName'
            placeholder='Enter First Name'
            {...register("firstName", { required: true })}
          />
          {errors.firstName && 
            <span>
              Please enter your first name
            </span>
          }
        </div>

        {/* last name */}
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type="text"
            name='lastName'
            id='lastName'
            placeholder='Enter Last Name'
            {...register("lastName")}
          />
        </div>

      </div>

      {/* email */}
        <div>
          <label htmlFor='email'>Email Address</label>
          <input
            type="email"
            name='email'
            id='email'
            placeholder='Enter email Address'
            {...register("email", { required: true })}
          />
          {errors.email && 
            <span>
              Please enter your email address
            </span>
          }
        </div>

      {/* phone number */}
        
        <div>
          <label htmlFor='phonenumber'>Phone Number</label>

          <div>
            {/* dropdown */}
            <div>
              <select
              name='dropdown'
              id='dropdown'
              {...register("countrycode", {required: true})}
              >
                {
                  CountryCode.map((element, index) => {
                    return (
                      <option key={index} value={element.code}>
                        {element.code} - {element.country}
                      </option>
                    )
                  })
                }
              </select>
            </div>

            <div>
              <input
              type='number' 
              name='phonenumber'
              id='phonenumber'
              placeholder='12345 67890'
              className='text-black'
              {...register("phoneNo",
                {
                  required: {value: true, message: "Please enter phone number"},
                  maxLength: {value: 10, message: "Invalid phone number"},
                  minLength: {value: 8, message: "Invalid phone number"}
                }
              )}
              />
            </div>
          </div>
          {
            errors.phoneNo && (
              <span>
                {errors.phoneNo.message}
              </span>
            )
          }
        </div>

        {/* message */}
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            placeholder='Enter your message'
            {...register("message", { required: true })}
          />
          {errors.message && 
            <span>
              Please enter your message
            </span>
          }
        </div>
        
        {/* button */}
        <button type='submit'>
          Send Message
        </button>

    </form>
  )
}
