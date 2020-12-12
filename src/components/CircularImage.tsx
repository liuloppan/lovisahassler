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
}

interface ImgProps extends HTMLAttributes<HTMLDivElement>{
  url: string;
  blur: string;
}

const Mask = styled.div<MaskProps>`
  postion: relative;
  display: flex;
  height: 200px;
  width: 200px;
  clip-path: ${(p) => `circle(${p.size}px at center)`};
  transition: 0.3s;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);

  &:hover{
    clip-path:  ${(p) => `circle(${p.size * p.factor }px at center)`};
    color: rgba(255, 255, 255, 0);
  }
`;

const Img = styled.div<ImgProps>`
  position: absolute;
  height: 200px;
  width: 200px;
  filter: ${(p) => `blur(${p.blur})`};
  transition: 0.2s;
  background: ${(p) => `url(${p.url})`};

  &:hover{
    filter: blur(0);
  }
`;

const CircularImage: FC<Props> = ({imgSrc, text = '', diameter = 60, hoverEffect = true}) => {
  return (
    <div>
      <Mask size={diameter} factor={hoverEffect ? 1.1 : 1} >
        <Img url={imgSrc} blur={hoverEffect ? '4px' : '0'} />
        <div className='circular-image-text'>{text}</div>
      </Mask>
    </div>
  );
}

/*<img src={imgSrc} alt={altStr} max-width='200px' max-height='20px' />*/


export default CircularImage;
