import * as React from 'react';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';
interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
  className?: string;
}
const CustomLeftArrow = ({ onClick }:CustomLeftArrowProps) => {
  return <div onClick={() => onClick()}>This is My custom arrow</div>
}
const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
  return (
    <div>
      <button onClick={() => previous()} />
      <button onClick={() => next()} />
    </div>
  );
};
const CustomDots = ({ index, active, onClick, carouselState }:DotProps) => {
  return <div onClick={() => onClick }>This is a Custom dots</div>
}`
