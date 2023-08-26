import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import {shallowEqualApp, useAppDispatch, useAppSelector} from './store'
import {changeMessageAction} from "@/store/modules/counter";


function App() {
  const { count,message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message:state.counter.message
    }),
    shallowEqualApp
  )

  const dispatch=useAppDispatch()
  function handleChangeMessage(msg:string) {
    dispatch(changeMessageAction(msg))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前击数：{count}</h2>
      <h2>{message}</h2>
      <button onClick={()=>handleChangeMessage("hhhh")}>改变message</button>
      <Suspense fallback={'loading...'}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
