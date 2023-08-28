import React, {ReactNode, memo} from 'react'
import {MenuItemWrapper} from './style'
import {formatCount, getImageSize} from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: React.FC<IProps> = (props) => {
  const {itemData} = props

  return (
    <MenuItemWrapper>
      <div className="cover-top">
        <img src={getImageSize(itemData.picUrl,140)} alt=""/>
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
