import React from 'react'

interface AccordianProps {
    data: { title: React.ReactNode; description: React.ReactNode }[];
}

function Accordian({ data }: AccordianProps) {
    return (
        <div>
            {data?.map((item, index) => (
                <div key={index}>
                    <h2>{item?.title}</h2>
                    <p>{item?.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Accordian
