import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import { HighlightText } from '../components/core/HomePage/HighlightText';
import {CTAButton} from '../components/core/HomePage/CTAButton';
import banner from '../assets/Images/banner.mp4'
import {CodeBlocks} from '../components/core/HomePage/CodeBlocks'
import './Home.css';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import { LearningLanguageSection } from '../components/core/HomePage/LearningLanguageSection';
import { InstructorSection } from '../components/core/HomePage/InstructorSection';
import Footer from '../components/common/Footer';
import { ExploreMore } from '../components/core/HomePage/ExploreMore';


export const Home = () => {
  return (
    <div>
        {/* section 1 */}
        <div className='relative mx-auto flex flex-col w-9/12 max-w-maxContent items-center
         text-white justify-between'>

            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                 transition-all duration-200 hover:scale-95 w-fit'>

                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                     transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            {/* heading */}
            <div className='text-center text-4xl font-semibold mt-7'>
                Empower your Future with
                <HighlightText text={"Coding Skills"} />
            </div>

            {/* sub-heading */}
            <div className=' mt-4 w-[70%] text-center text-sm font-bold text-richblack-300'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                {/* call to action button  */}
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>

                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>

            <div className='mx-3 my-12 shadow-blue-200 '>
                <video muted loop autoPlay className='shadow-[15px_15px_0px_rgb(255,255,255)] w-[80%] mx-auto'>
                    <source  src={banner} type="video/mp4"/>
                </video>
            </div>

            {/* <div className='blur' style={{top:'30%', right:'40%'}}></div> */}

            {/* code section1 */}
            <div>
                <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock your
                        <HighlightText text={"coding potential"}/>
                        {" "}with our online courses
                    </div>
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {btnText: "Try it yourself",
                    linkto: "/signup",
                    active: true,}
                }
                ctabtn2={
                    {btnText: "Learn more",
                    linkto: "/login",
                    active: false,}
                }
                codeblock={`<!DOCTYPE html>
                            <html lang="en">
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>HTML 5 Boilerplate</title>
                            <link rel="stylesheet" href="style.css">
                            </head>
                            <script src="index.js"></script>
                            </body>`}
                
                codeColor={
                    "text-yellow-25"
                }
                />
            </div>
            
            {/* code section2 */}
            <div>
                <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                        
                    </div>
                }
                subheading={
                    "Go head give it a try. Our hands-on learning environment means you'll be writting root code from your very first lesson."
                }
                ctabtn1={
                    {btnText: "Continue Lesson",
                    linkto: "/signup",
                    active: true,}
                }
                ctabtn2={
                    {btnText: "Learn more",
                    linkto: "/login",
                    active: false,}
                }
                codeblock={`<!DOCTYPE html>
                            <html lang="en">
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <meta http-equiv="X-UA-Compatible" content="ie=edge">
                            <title>HTML 5 Boilerplate</title>
                            <link rel="stylesheet" href="style.css">
                            </head>
                            <script src="index.js"></script>
                            </body>`}
                
                codeColor={
                    "text-yellow-25"
                }
                />
            </div>

            <ExploreMore />

        </div>

        {/* section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[310px]'>

                <div className='mx-auto flex w-9/12 flex-col justify-between max-w-maxContent gap-5 items-center'>

                <div className='h-[135px]'></div>

                    <div className='flex flex-row gap-7 text-white'>

                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                                Explore Full Catalog
                                <FaArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/login"}>
                            Learn More
                        </CTAButton>

                    </div>
                </div>
            </div>

            <div className='mx-auto flex w-9/12 flex-col justify-between max-w-maxContent gap-5 items-center'>
                <div className='flex flex-row gap-5 mb-10 mt-[95px] ml-2 '>

                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the skills you nedd for a 
                        <HighlightText text={"Job that is in demand"}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                            The modern StudyMotion is the dictates its own terms. Today, to be a competitive
                            specialist requires more than professional skills
                        </div>
                        <CTAButton active={true} linkto={"/login"}>
                            Learn More
                        </CTAButton>
                    </div>

                </div>

                <TimelineSection />

                <LearningLanguageSection />

            </div>


        </div>

        {/* section 3 */}
        <div className='w-9/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 
        first-letter bg-richblack-900 text-white'>
            
            <InstructorSection />

            <h2 className='text-center text-4xl font-semibold mt-10'>Review from other learners</h2>
            {/* Review slider here*/}
        </div>

        {/* footer */}
        <Footer />

    </div>
  )
}
