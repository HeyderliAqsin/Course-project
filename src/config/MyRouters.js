import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About  from '../pages/About'
import Pages  from '../pages/Pages'
import Categories  from '../pages/Categories'
import MegaMenu  from '../pages/MegaMenu'
import Blog  from '../pages/Blog'
import Contacts  from '../pages/Contacts'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import TeacherList from '../pages/TeacherList'
import VideoDetail from '../pages/VideoDetail'

const MyConfig = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/videodetail/:id' element={<VideoDetail/>}/>
        <Route path='/megamenu' element={<MegaMenu/>}/>
        <Route path='/teacherlist' element={<TeacherList/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  )
}

export default MyConfig