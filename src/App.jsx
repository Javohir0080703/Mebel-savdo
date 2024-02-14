import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Kuhni from './pages/Kuhni'
import Spalni from './pages/Spalni'
import Gostinniy from './pages/Gostinniy'
import Mexmon from './pages/Mexmon'
import Ofis from './pages/Ofis'
import ChildrenRoom from './pages/ChildrenRoom'
import Promotion from './pages/Promotion'
import News from './pages/News'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path='/kuhni' element={<Kuhni/>} />
        <Route path='/spalni' element={<Spalni/>} />
        <Route path='/gost' element={<Gostinniy/>}/>
        <Route path='/mexmonhona' element={<Mexmon/>} />
        <Route path='/ofis' element={<Ofis/>} />
        <Route path='/children' element={<ChildrenRoom/>}/>
        <Route path='/promotion' element={<Promotion/>}/>
        <Route path='/new' element={<News/>}/>
      </Route>
    )
   )
   
  return (
    <RouterProvider router={router} />
  )
}

export default App