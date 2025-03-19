import React from 'react'

const StatsData = [
    {
        count: "5k", label: "Active Students"
    },
    {
        count: "10+", label: "Mentors"
    },
    {
        count: "100+", label: "Courses"
    },
    {
        count: "50+", label: "Awards"
    }
]

export const Stats = () => {
  return (
    <section>
        <div>

            <div>
                {
                    StatsData.map((data, index) => (
                        <div key={index}>
                            <div>
                                {data.count}
                            </div>
                            <div>
                                {data.label}
                            </div>
                        </div>
                ))}
            </div>
            
        </div>
    </section>
  )
}
