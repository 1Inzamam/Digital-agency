import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const Root = () => {
  return (
      <div className=''>
          <NavBar></NavBar>
          <Outlet></Outlet>
          
    </div>
  )
}

export default Root