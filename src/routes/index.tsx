import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Registration from '../pages/Registration'
import Task from '../pages/Task'


const HomePage = lazy(()=> import('../pages/Login'))
const RegistrationPage = lazy(()=> import('../pages/Registration'))
const SuccessPage = lazy(() => import('../components/successPage'))
const TaskPage = lazy(() =>import('../pages/Task'))




const DefaultRoutes = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/qt/registration' element={<RegistrationPage/>}/>
        <Route path='/qt/task' element={<TaskPage/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default DefaultRoutes