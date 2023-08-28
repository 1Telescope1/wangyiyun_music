import React, {ReactNode, memo, ElementRef, useRef} from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from "@/components/area-header-v1";
import {Carousel} from 'antd'
import {shallowEqual} from "react-redux";
import {useAppSelector} from "@/store";
import AlbumItemV1 from "@/components/albim-item-v1";

interface IProps {
  children?:ReactNode
}

const NewAlbum: React.FC<IProps> = () => {
  const albumRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )

  function handlePrevClick() {
    albumRef.current?.prev()
  }

  function handleNextClick() {
    albumRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title='新碟上架' morePath='/discover/album'></AreaHeaderV1>
      <div className="content">
        <button className='arrow arrow-left sprite_02' onClick={handlePrevClick}></button>
        <div className="album">
          <Carousel ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return <AlbumItemV1 key={item.id} itemData={item} />
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
