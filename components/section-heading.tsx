import React from 'react'

type SectionHeadingProps = {
    children : React.ReactNode;
};

export default function SectionHeading({ children } : { children:string}) {
  return (
    <h2 className="my-32 text-3xl font-medium capitalize mb-8 mt-3">
        {children}
    </h2>
  )
}

