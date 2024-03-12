import './profileCard.css'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Badge from '../shared/badge/Badge'

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile bg-light my-3">
      <img src={profile.user.avatar} alt="" className="round-img" />
      <div>
        <h2>{profile.user.name}</h2>
        <div>

          <Badge role={profile.user.role} />
      
      </div>
       
        <p>{`${profile.location.street}, ${profile.location.city}, ${profile.location.country}`}</p>
        <Link to={`/profile/user/${profile._id}`} className="btn btn-primary">
          Voir le profil
        </Link>
      </div>
     
      <ul>
  {profile.categoryProduct[0].split(',').map((category, index) => (
    <li key={index} className="text-primary">
      <FaCheck /> {category.trim()}
    </li>
  ))}
</ul>
    </div>
  )
}

export default ProfileCard
