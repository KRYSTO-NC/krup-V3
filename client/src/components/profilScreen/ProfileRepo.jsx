import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileRepo = () => {
  return (
    <section className='profile-github'>
        <h2 className="text-primary"><FaGithub/> Github Repos</h2>
      <div className="repo bg-white my-1 p-1">
        <div>
          <h4>
            <Link to={'/'}>Repo 1</Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nam.
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 21</li>
            <li className="badge badge-light">Forks: 25</li>
          </ul>
        </div>
      </div>
      <div className=" repo bg-white my-1 p-1">
        <div>
          <h4>
            <Link to={'/'}>Repo 2</Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nam.
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 21</li>
            <li className="badge badge-light">Forks: 25</li>
          </ul>
        </div>
      </div>
      <div className="repo bg-white my-1 p-1">
        <div>
          <h4>
            <Link to={'/'}>Repo 3</Link>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nam.
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 21</li>
            <li className="badge badge-light">Forks: 25</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProfileRepo
