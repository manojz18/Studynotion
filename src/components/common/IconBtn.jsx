import React from 'react'

export const IconBtn = ({
    text,
    onclick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <button
        onClick={onclick}
        disabled={disabled}
        className={`flex items-center gap-x-2 px-4 py-2 rounded-md`}
        type={type}>
        {
            children ? (
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}
