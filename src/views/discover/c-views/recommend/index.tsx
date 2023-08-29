import React, {ReactNode, memo, useEffect} from 'react'
import {useAppDispatch} from "@/store";
import {
  fetchRankingDataAction,
  fetchRecommendDataAction,
  fetchSettleSinger
} from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";
import {RecommendLeft, RecommendRight, RecommendSection} from "@/views/discover/c-views/recommend/style";
import HotRecommend from "@/views/discover/c-views/recommend/c-cpns/hot-recommend";
import NewAlbum from './c-cpns/new-album';
import TopRanking from "@/views/discover/c-views/recommend/c-cpns/top-ranking";
import UserLogin from './c-cpns/user-login';
import SettleSinger from "@/views/discover/c-views/recommend/c-cpns/settle-singer";
import HotAnchor from './c-cpns/hot-anchor';

interface IProps {
  children?:ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
    dispatch(fetchSettleSinger())
  }, []);

  return (
    <div>
      <TopBanner></TopBanner>
      <RecommendSection className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSinger></SettleSinger>
          <HotAnchor></HotAnchor>
        </RecommendRight>
      </RecommendSection>
    </div>
  )
}

export default memo(Recommend)
