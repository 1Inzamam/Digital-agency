import { Outlet } from 'react-router'
import NavBar from '../Components/NavBar/NavBar'
import ScrollToTop from '../Utils/ScrollToTop'

const Root = () => {
  return (
    <div className=''>
      <ScrollToTop></ScrollToTop>
          <NavBar></NavBar>
          <Outlet></Outlet>
          
    </div>
  )
}

export default Root