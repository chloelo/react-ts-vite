import { createContext, useContext } from 'react';

const ImageSizeContext = createContext(150);

interface ChildProps {
  children: React.ReactNode;
  imageSize: number;
}
export const ImageSizeProvider = ({ children, imageSize }: ChildProps) => {
  return (
    <ImageSizeContext.Provider value={imageSize}>
      {children}
    </ImageSizeContext.Provider>
  )
}

// custom Hook
export const useImageSize = () => {
  const imageSize = useContext(ImageSizeContext)
  return imageSize
}