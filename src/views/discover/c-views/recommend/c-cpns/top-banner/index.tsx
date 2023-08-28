import React, {ReactNode, memo, useRef, ElementRef, useState} from 'react'
import {shallowEqualApp, useAppSelector} from "@/store";
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from "@/views/discover/c-views/recommend/c-cpns/top-banner/style";
import {Carousel} from 'antd';
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: React.FC<IProps> = () => {
  const [currentIndex,setCurrentIndex]=useState(0)
  const [bgImage, setBgImage] = useState<string>()

  const bannerRef=useRef<ElementRef<typeof Carousel>>(null)

  const {banners} = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  function handleChangeClick(isNext: boolean) {
    if(isNext) {
      bannerRef.current?.next()
    } else {
      bannerRef.current?.prev()
    }
  }
  function handleAfterChange(current:number) {
    setCurrentIndex(current)
  }

  function handleBeforeChange(from:number,to:number) {

  }

  function handleDot(index:number) {
    setCurrentIndex(index)
    bannerRef.current?.goTo(index)
  }

  let bgImageUrl
  if(currentIndex>=0&&banners.length>0) {
    bgImageUrl=banners[currentIndex].imageUrl+'?imageView&blur=40x20'
  }


  return (
    <BannerWrapper style={{background: `url('${bgImageUrl}') center center/6000px`}}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel beforeChange={handleBeforeChange} dots={false} effect='fade' autoplay ref={bannerRef} afterChange={handleAfterChange}>
            {
              banners.map(item => {
                return (
                  <div className='item' key={item.imageUrl}>
                    <img className='image' src={item.imageUrl} alt=""/>
                  </div>
                )
              })
            }
          </Carousel>
          <ul className='dots'>
            {banners.map((item,index)=>{
              return (
                <li key={item.imageUrl} onClick={()=>handleDot(index)}>
                  <span className={classNames('item',{active:index===currentIndex })}></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left'  onClick={() => handleChangeClick(false)}></button>
          <button className='btn right'  onClick={() => handleChangeClick(true)}></button>
        </BannerControl>

      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
