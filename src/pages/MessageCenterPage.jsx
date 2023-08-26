import { Space, Table } from "antd"
import { useEffect, useState } from "react"

const MessageCenterPage = () => {
  // 这里用了AntD的组件库 https://ant.design/components/table-cn#api
  // 为了节省时间，我没改下面的变量名
  const columns = [
    {
      title: "Message",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Sender",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="large">
          <a>View</a>
        </Space>
      ),
    },
  ]
  // 这里用了AntD的组件库 https://ant.design/components/table-cn#api
  // 为了节省时间，我没改下面的变量名
  const data = [
    {
      key: "1",
      name: "Your social recovery request has been approved",
      age: "0x23854…A237",
    },
    {
      key: "2",
      name: "Your social recovery request has been approved",
      age: "0x23854…A238",
    },
    {
      key: "3",
      name: "Your social recovery request has been approved",
      age: "0x23854…A239",
    },
  ]

  const [curUser, setCurUser] = useState("")

  // 我在这里默认了一开始进入app的用户是 owner
  // useEffect(() => {
  //   setCurUser("owner")
  // }, [])

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full p-8">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-900 font-bold text-3xl">Message Center</h1>
        </div>

        <div className="my-8 w-full">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  )
}

export default MessageCenterPage
