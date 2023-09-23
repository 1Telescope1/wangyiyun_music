import React, {Suspense} from 'react'
import {useRoutes, Link} from 'react-router-dom'
import routes from './router'
import {shallowEqualApp, useAppDispatch, useAppSelector} from './store'
import {changeMessageAction} from "@/store/modules/counter";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import Player from "@/views/player";

function App() {
  const {count, message} = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch = useAppDispatch()

  function handleChangeMessage(msg: string) {
    dispatch(changeMessageAction(msg))
  }

  return (
    <div className="App">
      <AppHeader></AppHeader>
        <Suspense fallback={'loading...'}>
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      <AppFooter></AppFooter>

      {/*播放器工具栏*/}
      <Player></Player>
    </div>
  )
}

export default App
