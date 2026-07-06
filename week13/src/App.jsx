import React from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import MyPage from './pages/MyPage'

import { UserInfoProvider } from './context/UserInfoContext';

const App = () => {
  return (
    <UserInfoProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </UserInfoProvider>
  )
}

export default App