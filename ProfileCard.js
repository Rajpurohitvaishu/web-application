import React from 'react';

const ProfileCard = ({ profile, onSelectProfile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photoUrl} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSelectProfile(profile)}>Summary</button>
    </div>
  );
};

export default ProfileCard;
