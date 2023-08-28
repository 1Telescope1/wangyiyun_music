import React,{ReactNode,memo} from 'react'
import AreaHeaderV1 from "@/components/area-header-v1";
import {shallowEqualApp, useAppSelector} from "@/store";
import SongMenuItem from "@/components/song-menu-item";
import {RecommendWrapper} from "@/views/discover/c-views/recommend/c-cpns/hot-recommend/style";

interface IProps {
  children?:ReactNode
}

const HotRecommend: React.FC<IProps> = () => {
  const {hotRecommends} =useAppSelector((state)=>({
    hotRecommends:state.recommend.hotRecommends
  }),shallowEqualApp)

  return (
    <RecommendWrapper>
      <AreaHeaderV1 title='热门推荐' morePath='/discover/songs'></AreaHeaderV1>
      <div className="recommend-list">
        {
          hotRecommends.map(item=>{
            return (
              <SongMenuItem itemData={item} key={item.id}></SongMenuItem>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
