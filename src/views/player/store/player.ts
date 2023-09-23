import { ILyricInfo, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import type { IRootState } from '@/store'

export const fetchCurrentSongDataAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('currentSong', (id, { dispatch, getState }) => {
  // 1.获取歌词信息
  getSongLyric(id).then((res) => {
    const lyricString = res.lrc.lyric
    const lyrics = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
  })

  // 3.判断歌曲是否在列表中
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((song) => song.id === id)
  if (findIndex !== -1) {
    // 有找到
    const currentSong = playSongList[findIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(findIndex))
  } else {
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      if (!res.songs.length) return
      const currentSong = res.songs[0]

      // 2.保存到列表中
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(currentSong)
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changeCurrentSongAction(currentSong))
      dispatch(changeCurrentSongIndexAction(newPlaySongList.length - 1))
    })
  }
})

export const changePlaySongAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>('playsong', (isNext, { dispatch, getState }) => {
  // 1.获取播放模式
  const playMode = getState().player.playMode
  const currentSongIndex = getState().player.currentSongIndex
  const playSongList = getState().player.playSongList

  // 2.判断逻辑
  const length = playSongList.length
  let newIndex = currentSongIndex
  if (playMode === 1) {
    newIndex = Math.floor(Math.random() * length)
  } else {
    if (isNext) newIndex += 1
    else newIndex -= 1
    if (newIndex > length - 1) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
  }

  // 3.获取当前歌曲
  const currentSong = playSongList[newIndex]
  dispatch(changeCurrentSongAction(currentSong))
  dispatch(changeCurrentSongIndexAction(newIndex))

  // 4.获取歌词数据
  getSongLyric(currentSong.id).then((res) => {
    const lyricString = res.lrc.lyric
    const lyrics = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
  })
})

interface IPlayState {
  currentSong: any
  lyrics: ILyricInfo[]
  lyricIndex: number
  playSongList: any[]
  currentSongIndex: number
  playMode: number
}
const initialState: IPlayState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,

  playSongList:[],
  currentSongIndex: 0,
  playMode: 0 // 0顺序播放 1随机播放 2单独循环
}

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
