import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BusinessExplorer from './components/BusinessExplorer'
import Account from './components/Account'
import Bookmarks from './components/Bookmarks'
import Settings from './components/Settings'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/explore" element={<BusinessExplorer />} />
        <Route path='/account' element={<Account />} ></Route>
        <Route path='/bookmarks' element={<Bookmarks />} ></Route>
        <Route path='/settings' element={<Settings />} ></Route>
      </Routes>
    </div>
  )
}

export default App