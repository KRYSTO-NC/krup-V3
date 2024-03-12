import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { FaAppStore, FaArtstation, FaBitbucket, FaNewspaper, FaPaperPlane, FaShoppingBasket, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLogoutMutation } from '../../../slices/userApiSlice'

import icon from '../../../assets/logo/icone.png'
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)
  console.log(userInfo)
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logoutApiCall())
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <nav className="navbar bg-dark">
      <h1 className="logo">
        <Link>
            <div className="logo">
            <img src={icon} alt="" />

            </div>
        
        </Link>
      </h1>
      <ul className="links">
        <li>
          <Link to="/developper">  <FaPaperPlane/>  Explorer</Link>
        </li>

        <li>
          <Link to="/posts"> <FaNewspaper/> Fil d'actualités</Link>
        </li>

        {userInfo ? (
          <>
            {/* if user is logged in, show these links */}
            <li>
              <Link to={`/products`}>
                <FaShoppingBasket /> <span className="hide-sm">Catalogue</span>{' '}
              </Link>
            </li>
            <li>
              <Link to={`/dashboard/${userInfo?.userData?._id}`}>
                <FaUser /> <span className="hide-sm">Mon espace</span>{' '}
              </Link>
            </li>
        
            <li>
              <Link to="/" onClick={logoutHandler}>
                <FaSignOutAlt /> <span className="hide-sm">Déconnexion</span>{' '}
              </Link>
            </li>
          </>
        ) : (
          <>
            {/* If user is logged out, show these links */}
            <li>
              <Link to="/register">S'inscire</Link>
            </li>
            <li>
              <Link to="/login">Connection</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
