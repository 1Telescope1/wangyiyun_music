import React, {ReactNode, memo, useEffect} from 'react'
import {useAppDispatch} from "@/store";
import {fetchRecommendDataAction} from "@/views/discover/c-views/recommend/store/recommend";
import TopBanner from "@/views/discover/c-views/recommend/c-cpns/top-banner";

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
      <div>Recommend</div>
    </div>
  )
}

export default memo(Recommend)
