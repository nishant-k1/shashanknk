import React from "react";
import RootLayout from "@/app/layout";
import HomeView from "@/views/HomeView";
type Props = {};

const page = (props: Props) => {
  return (
    <RootLayout>
      <HomeView />
    </RootLayout>
  );
};

export default page;
