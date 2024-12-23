import React from 'react'

type SectionHeadingProps = {
    children : React.ReactNode;
};

export default function SectionHeading({ children } : { children:string}) {
  return (
    <h2 className="flex justify-center text-3xl font-medium capitalize my-3 mb-6">
        {children}
    </h2>
  )
}

