import React from 'react';

const Badge = ({ role }) => {
  let badgeColor = '';

  // Définir la couleur en fonction du rôle
  switch (role) {
    case 'Artisan/Producteur':
      badgeColor = '#027353';
      break;
    case 'Revendeur':
      badgeColor = '#1303a6';
      break;
    case 'user':
      badgeColor = '#0388a6';
      break;
    case 'Prestataire':
      badgeColor = '#842573';
      break;
    default:
      badgeColor = 'gray';
  }

  return (
    <div style={{ width: "16rem", fontWeight:'bolder', textTransform:"uppercase",  textAlign: "center",backgroundColor: badgeColor, padding: '8px', borderRadius: '4px', color: 'white' }}>
      {role}
    </div>
  );
};

export default Badge;
