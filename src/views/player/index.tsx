import React,{ReactNode,memo} from 'react'

interface IProps {
  children?:ReactNode
}

const Player: React.FC<IProps> = () => {
  return (
    <div>123</div>
  )
}

export default memo(Player)
