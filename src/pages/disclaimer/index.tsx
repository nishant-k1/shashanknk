import React from "react";
import DisclaimerView from "@/views/DisclaimerView";
import RootLayout from "@/app/layout";

type Props = {};

const disclaimer = (props: Props) => {
  return (
    <RootLayout>
      <DisclaimerView />
    </RootLayout>
  );
};

export default disclaimer;
