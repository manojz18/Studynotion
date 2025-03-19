import React from 'react'
import { IconBtn } from '../../../common/IconBtn'
import { useSelector } from 'react-redux'

export const RenderTotalAmount = () => {
    const {total, cart} = useSelector((state) => state.cart)

    const handleBuyCourses = () => {
        const courses = cart.map((course) => course._id)
        console.log('Bought this courses', courses)

        // TODO: integrate API
    }

  return (
    <div>
        <p>Total: </p>

        <p>Rs {total}</p>

        <IconBtn 
            text='Buy Now'
            onclick={handleBuyCourses}
            customClasses={'flex w-full justify-center'}
        />
    </div>
  )
}
