import React from "react";
import DisclaimerView from "@/views/HomeView";
import RootLayout from "@/app/layout";
type Props = {};

const page = (props: Props) => {
  return (
    <RootLayout>
      <DisclaimerView />
    </RootLayout>
  );
};

export default page;
