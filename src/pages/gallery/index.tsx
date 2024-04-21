import React from "react";
import GalleryView from "@/views/GalleryView";
import RootLayout from "@/app/layout";
type Props = {};

const gallery = (props: Props) => {
  return (
    <RootLayout>
      <GalleryView />{" "}
    </RootLayout>
  );
};

export default gallery;
