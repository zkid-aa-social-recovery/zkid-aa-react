import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const AccountRecoveryPage = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-start h-full p-8 gap-12">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-gray-900 font-bold text-3xl">Account Recovery</h1>
          <div>icons</div>
        </div>

        {/* TIPS */}
        <h2 className="text-gray-900 font-regular text-2xl">
          Recover your account with the following procedure 💡
        </h2>

        {/* SELECT */}
      </div>
    </>
  );
};

export default AccountRecoveryPage;
