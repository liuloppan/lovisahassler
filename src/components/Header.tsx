  import { Parallax } from 'react-parallax';
  import {FC} from 'react'

interface Props {
  path: string
}

const Header: FC<Props> = ({path, children}) => {
  return <Parallax style={{height: '300px'}} bgImage={path} bgImageAlt="the cat" strength={500}>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 32, color: '#fff'}}>
    {children}
    </div>
</Parallax>
}

export default Header