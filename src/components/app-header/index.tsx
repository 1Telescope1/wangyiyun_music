import React, {ReactNode, memo} from 'react'
import { NavLink} from 'react-router-dom'
import {HeaderLeft, HeaderRight, HeaderWrapper} from "@/components/app-header/style";
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'


interface TitleType {
  type: string
  title: string
  link: string
}

interface IProps {
  children?: ReactNode
}

const AppHeader: React.FC<IProps> = () => {
  function showItem(item: TitleType) {
    if (item.type == 'path') {
      return <NavLink to={item.link} className={({isActive}) => (isActive ? 'active' : '')}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content ">
        <HeaderLeft>
          <a className='logo sprite_01' href="/#">
            网易云音乐
          </a>
          <div className='select-list'>
            {
              headerTitles.map(item => {
                return <div className='select-item' key={item.title}>
                  {showItem(item)}
                </div>
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
          />
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
)
}

export default memo(AppHeader)
