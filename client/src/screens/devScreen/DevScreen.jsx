import React, { useState } from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import ProfileCard from '../../components/profileCard/ProfileCard';
import { useGetProfilesQuery } from '../../slices/profileApiSlice';

const DevScreen = () => {
  const { data: profiles, isLoading, isError } = useGetProfilesQuery();
  const [selectedRole, setSelectedRole] = useState(''); // État pour stocker le rôle sélectionné

  // Filtrer les profils en fonction du rôle sélectionné
  const filteredProfiles = profiles?.data?.filter((profile) =>
    selectedRole ? profile.user.role === selectedRole : true
  );

  // Liste des rôles disponibles
  const roleOptions = ['user', 'Artisan/Producteur', 'Revendeur', 'Prestataire'];

  return (
    <div className="container">
      {isLoading ? (
        <p>Chargement...</p>
      ) : isError ? (
        <p>Une erreur est survenue</p>
      ) : (
        <>
          <h1 className="large text-primary">Les Artisans</h1>
          <p className="lead">
            {' '}
            <FaConnectdevelop /> Explorer et se connecter avec d'autres artisans et producteurs locaux.
          </p>

          {/* Menu déroulant pour le filtre par rôle */}

         <div className="form">

          <div className="form-group">

          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            >
            <option value="">Tous les rôles</option>
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
            </div>
            </div>

          <div className="profiles">
            {filteredProfiles && filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileCard key={profile._id} profile={profile} />
              ))
            ) : (
              <p className='text-danger lead'>Aucun profil trouvé pour le rôle sélectionné.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DevScreen;
