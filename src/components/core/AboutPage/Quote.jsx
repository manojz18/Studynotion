import React from 'react'
import { HighlightText } from '../HomePage/HighlightText'

export const Quote = () => {
  return (
    <div>
        We are passionate about revolutionizing the way we learn. Our innovative platform
        <HighlightText text={"combines technology"} />
        , 
        <span className='oklch(0.553 0.195 38.402)'>
            expertise
        </span>
        , and community to create an
        <span className='bg-gradient-to-t from-amber-500 to-orange-500'>
         unparalleled educational experience.
        </span>
    </div>
  )
}
