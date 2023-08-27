import React, {ReactNode, memo, useEffect} from 'react'
import hyRequest from "@/service";

interface IProps {
  children?:ReactNode
}

const Recommend: React.FC<IProps> = () => {
  useEffect(()=>{
    hyRequest.get({
      url:'/banner'
    }).then(res=>{
    })
  })
  return <div>Recommend</div>
}

export default memo(Recommend)
