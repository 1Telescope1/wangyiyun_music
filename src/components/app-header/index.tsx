import React, { ReactNode, memo } from 'react'
import { Link } from 'react-router-dom'
import {HeaderWrapper} from "@/components/app-header/style";

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content ">
        <Link to="/discover">发现</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
