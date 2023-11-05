import React from 'react'
import Layout from './Layout'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
const App = () => {
  return (
    <div >
      <Provider store={appStore}>
      <Layout/>
      </Provider>
    </div>
  )
}

export default App
