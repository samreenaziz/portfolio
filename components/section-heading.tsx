import React from 'react'

export type SectionHeadingProps = {
  children : React.ReactNode;
};

export default function SectionHeading({ children } : { children:string}) {
  return (
    <h2 className="flex justify-center leading-relaxed text-center text-3xl font-medium capitalize mt-3 mb-2">
        {children}
    </h2>
  )
}

