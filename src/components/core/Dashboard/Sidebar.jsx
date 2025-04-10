import React, { useEffect } from 'react'
import {sidebarLinks} from '../../../data/dashboard-links'
import { useSelector } from 'react-redux'
import {logout} from '../../../services/operations/authAPI'
import {SidebarLink} from './SidebarLink'
import { VscSignOut } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConfirmationModal } from '../../common/ConfirmationModal'

export const Sidebar = () => {
    const {user, loading: profileLoading} = useSelector((state) => state.profile)
    const {loading: authLoading} = useSelector((state) => state.auth)
    const [confirmationModal, setConfirmationModal] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("User:", user);
    }, [user]);  // ✅ This ensures logging only happens when user changes
    

    if(profileLoading || authLoading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

  return (
    <div>
        <div className='flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
        py-10 bg-richblack-800 h-[calc(100vh-3.5rem)]'>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link) => {
                        if(link.type && user.accountType !== link.type) return null
                        return (
                            <SidebarLink key={link.id} link={link} iconName={link.icon} />
                        )
                    })
                }

            </div>

            <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600'></div>

            <div>
                <SidebarLink 
                    link={{name: "Settings", path: "dashboard/settings"}}
                    iconName={"VscSettingsGear"}
                />

                <button
                onClick={() => setConfirmationModal({
                    text1: "Are you sure you want to logout?",
                    text2: "You will be logged out of your account",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null)
                })}
                className='text-sm font-medium text-richblack-300 '
                >
                    <div className='flex items-center gap-x-2'>
                        <VscSignOut className='text-lg'/>
                        <span>Logout</span>
                    </div>

                </button>

            </div>

        </div>

        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}
