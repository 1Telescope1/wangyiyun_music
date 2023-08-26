import React,{ReactNode,memo} from 'react'

interface IProps {
  children?:ReactNode
}

const Focus: React.FC<IProps> = () => {
  return <div>Home</div>
}

export default memo(Focus)
