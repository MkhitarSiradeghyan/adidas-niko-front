import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Banner from './components/Banner/Banner'
import Layout from './layouts/Layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App