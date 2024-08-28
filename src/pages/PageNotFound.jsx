import React from 'react'

const PageNotFound = ({title}) => {
  return (
<div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-300">
    <h1 className="text-red-600 text-4xl font-bold shadow-lg p-6 rounded-lg bg-white animate-pulseBigSmall">
        Oops! Page Not Found {title}
    </h1>
</div>

  )
}

export {PageNotFound}