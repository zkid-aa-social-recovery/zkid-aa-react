import React, { useState } from "react"

import { Button, message, Steps, theme } from "antd"
const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
]

const AccountRecoveryPage = () => {
  const { token } = theme.useToken()
  const [current, setCurrent] = useState(0)
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }))
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
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
        <div className="bg-white py-6 px-12 rounded-lg mt-2 w-full h-full">
          <Steps current={current} items={items} />
          <div className="flex items-center justify-center w-full h-max">
            <div className="flex items-center justify-center">
              <div>123123</div>
              <div>123123</div>
              <div>123123</div>
              <div>123123</div>
            </div>

            <div
              style={{
                marginTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                width: "100%",
              }}
            >
              {current < steps.length - 1 && (
                <Button onClick={() => next()}>Next</Button>
              )}
              {current > 0 && (
                <Button
                  type="link"
                  style={{
                    margin: "0 8px",
                  }}
                  onClick={() => prev()}
                >
                  Previous
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button onClick={() => message.success("Processing complete!")}>
                  Done
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountRecoveryPage
