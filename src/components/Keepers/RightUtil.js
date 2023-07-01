import React from 'react'

const RightUtil = ({data}) => {
  return (
    <div>
      <div className="z-20 flex">
      <div className="flex text-left align-middle pl-[10%] text-[18px] text-[#707070] mb-6 z-40 w-[280px] cursor-pointer gap-2">
        <img src="../icons/man.png" className="h-[30px] mr-[5px]" />
        {data?.name}
      </div>
    </div>
    </div>
  )
}

export default RightUtil
