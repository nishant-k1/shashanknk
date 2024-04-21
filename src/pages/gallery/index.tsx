import React from "react";
import GalleryView from "@/views/GalleryView";
import RootLayout from "@/app/layout";
type Props = {
  id: string;
};

const Gallery = ({ id }: Props) => {
  return (
    <RootLayout>
      <GalleryView id={id} />
    </RootLayout>
  );
};

export default Gallery;
