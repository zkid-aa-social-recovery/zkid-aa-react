import React, { useState } from "react"

import { Divider, Steps } from "antd"

const AccountRecoveryPage = () => {
  const [current, setCurrent] = useState(0)
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full p-8">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-900 font-bold text-3xl">Account Recovery</h1>
          <div>icons</div>
        </div>

        {/* TIPS */}
        <h2 className="text-gray-700 font-regular text-2xl mt-8">
          Recover your account with the following TWO steps 💡
        </h2>

        {/* SELECT */}
        <div className="bg-white py-6 px-12 rounded-lg mt-2 w-full h-full"></div>
      </div>
    </>
  )
}

export default AccountRecoveryPage
