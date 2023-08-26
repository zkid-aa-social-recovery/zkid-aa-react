import React, { useEffect, useState } from "react"
import { Button, message, Steps, theme } from "antd"
import { Checkbox } from "antd"

// For `steps` component
const steps = [
  {
    title: "Select Verifier Services",
    content: [
      { id: 1, name: "did:zk:0x2375…0579A" },
      { id: 2, name: "did:zk:0x2375…0579A" },
      { id: 3, name: "did:zk:0x2375…0579A" },
      { id: 4, name: "did:zk:0x2375…0579A" },
    ],
  },
  {
    title: "Select Guardians",
    content: [
      { id: 1, name: "Did:zk:0x2375…0579A" },
      { id: 2, name: "Did:zk:0x2375…0579A" },
      { id: 3, name: "Did:zk:0x2375…0579A" },
      { id: 4, name: "Did:zk:0x2375…0579A" },
    ],
  },
]

const AccountRecoveryPage = () => {
  const [firContent, setFirContent] = useState(steps[0])
  const [secContent, setSecContent] = useState(steps[1])

  // Use `check box` component
  const onChange = (e, id) => {
    console.log(`content${id} checked = ${e.target.checked}`)
  }

  // Use `steps` component here

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
    height: "420px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full p-8">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-900 font-bold text-3xl">Account Recovery</h1>
          {/* <div>icons</div> */}
        </div>

        {/* TIPS */}
        <h2 className="text-slate-100 font-semibold font-regular text-2xl mt-8">
          Recover your account with the following TWO steps 👇🏻
        </h2>

        {/* SELECT */}
        <div className="w-full bg-gray-200 p-6 rounded-lg mt-6 shadow-lg">
          <Steps current={current} items={items} />
          <div style={contentStyle}>
            <div className="font-bold text-blue-700 flex items-center justify-center gap-8">
              {steps[current].content.map((item) => {
                const { id, name } = item

                return (
                  <Checkbox
                    onChange={(e) => onChange(e, id)}
                    className="hover:text-blue-600 text-blue-500 select-none cursor-pointer transition hover:scale-105 p-4 rounded-lg text-lg"
                  >
                    <p>{name}</p>
                  </Checkbox>
                )
              })}
            </div>
          </div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button onClick={() => next()}>Proceed</Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: "0 8px",
                }}
                type="text"
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                style={{
                  margin: "0 8px",
                  backgroundColor: "#2563EB",
                  color: "#fff",
                }}
                onClick={() => message.success("Processing complete!")}
              >
                Send Request
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountRecoveryPage
