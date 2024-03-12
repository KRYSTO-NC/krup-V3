import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileTop = ({profile}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img
        src={profile.user.avatar}
        alt=""
        className="round-img my-1"
      />
      <h1 className="large">{profile.user.name}</h1>
      <p className="lead">{profile.status} chez {profile.company}</p>
      <p>{profile.location.city}</p>

      <div className="icons my-1">
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </Link>

        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  )
}

export default ProfileTop
