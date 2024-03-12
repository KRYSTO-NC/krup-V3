import { Outlet } from 'react-router-dom'
import './sass/main.css'
import ScrollToTop from './components/utils/ScrollToTop'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
