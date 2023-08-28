import React, {ReactNode, memo, useEffect} from 'react'
import {useAppDispatch} from "@/store";
import {fetchRecommendDataAction} from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
import {RecommendLeft, RecommendRight, RecommendSection} from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";
import NewAlbum from './c-cpns/new-album';

interface IProps {
  children?:ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  }, []);

  return (
    <div>
      <TopBanner></TopBanner>
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
