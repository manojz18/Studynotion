import { BiEdit } from "react-icons/bi";
import React from 'react'
import { useSelector } from "react-redux";
import { IconBtn } from "../../common/IconBtn";
import { useNavigate } from "react-router-dom";

export const MyProfile = () => {
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.profile)

    // console.log("User: ", user);
  return (
    <div>
        <h1>
            My Profile
        </h1>

        {/* section 1 */}
        <div>
            <div>
                <img src={`${user?.image}`}
                alt="Name"
                className="aspect-square w-[78px] rounded-full object-cover" 
                />

                <div>
                    <p>{user?.firstName + " " + user?.lastName}</p>
                    <p>{user?.email}</p>
                </div>
            </div>

            <div>
                <IconBtn 
                text="Edit"
                onClick={() => {
                    navigate("/dashboard/settings")
                }}
                />

                <BiEdit />
            </div>
        </div>

        {/* section 2 */}
        <div>

            <div>
                <p>About</p>

                <div>
                    <IconBtn 
                    text="Edit"
                    onClick={() => {
                        navigate("dashboard/settings")
                    }}
                    />

                    <BiEdit />
                </div>
                
            </div>

            <p>{user?.additionalDetails?.about ?? "write something about yourself"}</p>

        </div>

        {/* section 3 */}
        <div>
            <div>
                <p>Personal Details</p>
                <div>
                    <IconBtn 
                    text="Edit"
                    onClick={() => {
                        navigate("dashboard/settings")
                    }}
                    />

                    <BiEdit />
                </div>
            </div>

            <div>
                <div>
                    <p>First Name</p>
                    <p>{user?.firstName}</p>
                </div>

                <div>
                    <p>Email</p>
                    <p>{user?.email}</p>
                </div>

                <div>
                    <p>Gender</p>
                    <p>{user?.additionalDetails?.gender ?? "Add gender"}</p>
                </div>

                <div>
                    <p>Contact Number</p>
                    <p>{user?.additionalDetails?.contactNumber ?? "Add contact number"}</p>
                </div>
                
                <div>
                    <p>Last Name</p>
                    <p>{user?.lastName}</p>
                </div>

                <div>
                    <p>Date of Birth</p>
                    <p>{user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}</p>
                </div>
            </div>
        </div>

    </div>
  )
}
