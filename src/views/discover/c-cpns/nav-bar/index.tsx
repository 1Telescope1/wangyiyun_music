import React,{ReactNode,memo} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {discoverMenu} from '@/assets/data/local-data'
import {NavWrapper} from "@/views/discover/c-cpns/nav-bar/style";

interface IProps {
  children?:ReactNode
}

const NavBar: React.FC<IProps> = () => {
  return (
    <NavWrapper >
      <div className='nav wrap-v1'>
        {
          discoverMenu.map(item=>{
            return (
              <div className='item' key={item.link}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })
        }
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
