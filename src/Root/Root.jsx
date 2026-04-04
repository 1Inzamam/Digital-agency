import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NavBar/NavBar'

const Root = () => {
  return (
      <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Root