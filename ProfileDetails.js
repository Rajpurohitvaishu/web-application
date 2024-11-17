import React from 'react';
import Map from './Map';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photoUrl} alt={profile.name} />
      <p>{profile.description}</p>
      <h3>Location</h3>
      <Map address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
