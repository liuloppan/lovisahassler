import React, { FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props{
  diameter?: number;
  imgSrc: string;
  hoverEffect?: boolean;
  text?: string;
}

interface MaskProps extends HTMLAttributes<HTMLDivElement>{
  size: number;
  factor: number;
  url: string;
  blur: string;
}

const Mask = styled.div<MaskProps>`
  display: flex;
  height: 200px;
  width: 200px;
  clip-path: ${(p) => `circle(${p.size}px at center)`};
  filter: ${(p) => `blur(${p.blur})`};
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

const CircularImage: FC<Props> = ({imgSrc, text = '', diameter = 60, hoverEffect = true}) => {
  return (
    <div>
      <Mask size={diameter} blur={hoverEffect ? '4px' : '0'} factor={hoverEffect ? 1.1 : 1} url={imgSrc} >
        <div className='text-button'>{text}</div>
      </Mask>
    </div>
  );
}

/*<img src={imgSrc} alt={altStr} max-width='200px' max-height='20px' />*/


export default CircularImage;
