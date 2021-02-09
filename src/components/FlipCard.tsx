import React, { FC, useState} from 'react';
import { useSpring, animated as a } from 'react-spring';

interface Props{
  frontImg?: string;
  backImg: string;
}

const FlipCard: FC<Props> = ({frontImg, backImg}) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <div onClick={() => set(state => !state)}>
      <a.div className="flip-card" style={{
        opacity: opacity.interpolate(o => 1 - Number(o)),
        transform,
        backgroundImage: 'url(' + frontImg + ')'
      }} />
      <a.div className="flip-card" style={{
        opacity,
        transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        backgroundImage: 'url(' + backImg + ')'
      }} />
    </div>
  )
}

export default FlipCard;
