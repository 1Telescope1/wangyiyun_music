import React, {ReactNode, memo} from 'react'
import {shallowEqualApp, useAppSelector} from "@/store";
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from "@/views/discover/c-views/recommend/c-cpns/top-banner/style";
import {Carousel} from 'antd';

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const {banners} = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  return (
    <BannerWrapper>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel autoplay>
            {
              banners.map(item => {
                return (
                  <div className='item' key={item.imageUrl}>
                    <img src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left'></button>
          <button className='btn right'></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
