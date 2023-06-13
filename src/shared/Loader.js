import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
    </div>
    </div>
  )
}

export default Loader
