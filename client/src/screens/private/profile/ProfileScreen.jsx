import ProfileAbout from '../../../components/profilScreen/ProfileAbout'
import ProfileEducation from '../../../components/profilScreen/ProfileEducation'
import ProfileExperience from '../../../components/profilScreen/ProfileExperience'
import ProfileRepo from '../../../components/profilScreen/ProfileRepo'
import ProfileTop from '../../../components/profilScreen/ProfileTop'
import { useGetProfileDetailsQuery } from '../../../slices/profileApiSlice'
import './profileScreen.css'
import { Link, useParams } from 'react-router-dom'

const ProfileScreen = () => {

  const {id} = useParams()

  const {data: profile , isLoading , isError} = useGetProfileDetailsQuery(id)

  console.log('====================================');
  console.log(profile);
  console.log('====================================');
  return (
    <section className="container">

{isLoading ? (
        <p>chargement...</p>
      ) : isError ? (
        <p>Une erreur est survenue</p>
      ) : (
        <>
      <Link to="/developper" className="btn btn-light">
        Retour
      </Link>
      <h1 className="large text-primary">Profile</h1>
      <div className="profile-grid my-2">
        <ProfileTop profile={profile.data}/>
        {/* <ProfileAbout  profile={profile} />
        <ProfileExperience profile={profile} />
        <ProfileEducation profile={profile} />
        <ProfileRepo profile={profile}/> */}
      </div>
        </>
      )}
    </section>
  )
}

export default ProfileScreen
