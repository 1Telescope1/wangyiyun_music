import React, {ReactNode, memo} from 'react'
import {RankingWrapper} from './style'
import AreaHeaderV1 from "@/components/area-header-v1";
import {useAppSelector} from "@/store";
import TopRankingItem from "@/components/top-ranking-item";

interface IProps {
  children?: ReactNode
}

const TopRanking: React.FC<IProps> = () => {
  const {rankings} = useAppSelector((state) => (
    {
      rankings: state.recommend.rankings
    })
  )

  return (
    <RankingWrapper>
      <AreaHeaderV1 title='榜单' morePath='/discover/ranking'></AreaHeaderV1>
      <div className="content">
        <div className="rankings">
          {rankings.map((item) => {
            return <TopRankingItem itemData={item} key={item.id} />
          })}
        </div>
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
