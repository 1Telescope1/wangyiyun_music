import React,{ReactNode,memo} from 'react'
import {PlayWrapper} from "@/views/player/style";
import AppPlayerBar from "@/views/player/app-player-bar";

interface IProps {
  children?:ReactNode
}

const Player: React.FC<IProps> = () => {
  return (
    <PlayWrapper>
      <AppPlayerBar></AppPlayerBar>
    </PlayWrapper>
  )
}

export default memo(Player)
