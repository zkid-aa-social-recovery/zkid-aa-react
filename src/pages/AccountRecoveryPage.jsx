import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useTab,
  useMultiStyleConfig,
  Button,
  Box,
} from "@chakra-ui/react"
import React from "react"

const AccountRecoveryPage = () => {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps["aria-selected"]

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as="span" mr="2">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <>
      <div className="flex flex-col items-start justify-start h-full p-8 gap-12">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-900 font-bold text-3xl">Account Recovery</h1>
          <div>icons</div>
        </div>

        {/* TIPS */}
        <h2 className="text-gray-700 font-regular text-2xl">
          Recover your account with the following TWO steps 💡
        </h2>

        {/* SELECT */}
        <div className="bg-blue-300 py-6 px-12 rounded-lg">
          <Tabs>
            <TabList>
              <CustomTab>
                <h2 className="font-bold">One: Select Verifier Services</h2>
              </CustomTab>
              <CustomTab>
                <h2 className="font-bold">Two: Select Guardians</h2>
              </CustomTab>
            </TabList>
            <TabPanels>
              <TabPanel>1</TabPanel>
              <TabPanel>2</TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default AccountRecoveryPage
