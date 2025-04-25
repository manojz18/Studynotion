import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home'
import { useState } from 'react';
import Signup from './pages/signup.jsx' 
import Login from './pages/login.jsx'
import Navbar from './components/common/Navbar';
import OpenRoute from './components/core/Auth/OpenRoute.jsx';
import { ForgotPassword } from './pages/ForgotPassword.jsx';
import { UpdatePassword } from './pages/UpdatePassword.jsx';
import { VerifyEmail } from './pages/VerifyEmail.jsx';
import { About } from './pages/About.jsx';
import {MyProfile} from './components/core/Dashboard/MyProfile.jsx'
import {Dashboard} from './pages/Dashboard.jsx'
import { PrivateRoute } from './components/core/Auth/PrivateRoute.jsx';
import {Error} from './pages/Error.jsx'
import { EnrolledCourses } from './components/core/Dashboard/EnrolledCourses.jsx';
import Cart from './components/core/Dashboard/Cart/index.jsx';
import { ACCOUNT_TYPE } from './utils/constants.js';
import { useSelector } from 'react-redux';
import { AddCourse } from './components/core/Dashboard/AddCourse/index.jsx';
import {MyCourses} from './components/core/Dashboard/MyCourses.jsx';
import EditCourse from './components/core/Dashboard/EditCourse/index.js';
import {Catalog} from './pages/Catalog.jsx'
import CourseDetails from './pages/CourseDetails.jsx';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useSelector((state) => state.profile)
  console.log("User: ", user);
  
  return (
    <div className=' relative w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='catalog/:catalogName' element={<Catalog/>} />
        <Route path="courses/:courseId" element={<CourseDetails/>} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />

        {/* <Route path='/contact' element={<Contact />} /> */}

        <Route 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path='dashboard/my-profile' element={<MyProfile />} />
          {/* <Route path='dashboard/Settings' element={<Settings />} /> */}
          
        </Route>

        {
          user && user.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path='dashboard/cart' element={<Cart />} />
              <Route path='dashboard/enrolled-courses' element={<EnrolledCourses />} />
            </>
          )
        }

        {
          user && user.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path='dashboard/add-course' element={<AddCourse />} />
              <Route path='dashboard/my-courses' element={<MyCourses />} />
              <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
            </>
          )
        }


        {/* <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route> */}

        <Route path='*' element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
