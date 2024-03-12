import React from 'react'
import { FaCheck } from 'react-icons/fa'

const ProfileAbout = ({profile}) => {
  return (
    <div className='profile-about bg-light p-2'>
        <h2 className="text-primary">
            {profile.user.name} Bio
        </h2>
        <p>{profile.bio}</p>
         <div className="line"></div>

         <h2 className="text-primary">
                Compétences
         </h2>

         <div className="skills">
            <div className="p-1">
                <FaCheck/> HTML
            </div>
            <div className="p-1">
                <FaCheck/> CSS
            </div>
            <div className="p-1">
                <FaCheck/> Python
            </div>
            <div className="p-1">
                <FaCheck/> Javascript
            </div>
         </div>
    </div>
  )
}

export default ProfileAbout