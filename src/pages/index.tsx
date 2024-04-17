import React from "react";
import HomeView from "@/views/HomeView";
import RootLayout from "@/app/layout";
type Props = {};

const page = (props: Props) => {
  return (
    <RootLayout>
      <HomeView />
    </RootLayout>
  );
};

export default page;
