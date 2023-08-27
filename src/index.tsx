import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from '@/App'
import 'normalize.css'
import './assets//css/index.less'
import { Provider } from 'react-redux'
import store from './store'
// import {ThemeProvier} from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    {/*<ThemeProvier>*/}
      <HashRouter>
        <App />
      </HashRouter>
    {/*</ThemeProvier>*/}

  </Provider>
)
