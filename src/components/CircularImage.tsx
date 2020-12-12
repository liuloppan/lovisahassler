import React, { FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props{
  diameter?: number;
  imgSrc: string;
  hoverFactor?: number;
}

interface MaskProps extends HTMLAttributes<HTMLDivElement>{
  size: number;
  factor: number;
  url: string;
}

const Mask = styled.div<MaskProps>`
  display: flex;
  height: 200px;
  width: 200px;
  clip-path: ${(p) => `circle(${p.size}px at center)`};
  filter: blur(4px);
  transition: 0.1s;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: ${(p) => `url(${p.url})`};
  text-color: red;

  &:hover{
    clip-path:  ${(p) => `circle(${p.size * p.factor }px at center)`};
    filter: blur(0);
  }
`;

const CircularImage: FC<Props> = ({imgSrc, diameter = 60, hoverFactor = 1.1}) => {
  return (
    <Mask size={diameter} factor={hoverFactor} url={imgSrc}>
      <div className='text'>CV</div>
    </Mask>
  );
}

/*<img src={imgSrc} alt={altStr} max-width='200px' max-height='20px' />*/


export default CircularImage;
