import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from '../../../../slices/cartSlice';

export const RenderCartCourses = () => {
    const {cart} = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    console.log("Cart contains: ", cart);

    const handleRemoveFromCart = (courseId) => {
        dispatch(removeFromCart(courseId));
    };

  return (
    <div>
        {
            cart.map((course, index) => (
                <div key={index}>

                    <div>
                        <img src={course?.thumbnail} alt='thumbnail' />

                        <div>
                            <p>{course?.courseName}</p>
                            <p>{course?.category?.name}</p>

                            <div>
                                <span>4.8</span>
                                <ReactStars 
                                    count={5}
                                    size={20}
                                    edit={false}
                                    activeColor='#ffd700'
                                    emptyIcon={<IoStarOutline />}
                                    fullIcon={<IoStar />}
                                />
                                <span>{course?.ratingAndReviews?.length} Ratings</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => handleRemoveFromCart(course._id)}>
                            <RiDeleteBin6Line />
                            <span>Delete</span>
                        </button>

                        <p>Rs. {course.price}</p>
                    </div>

                </div>
            ))
        }

    </div>
  )
}
