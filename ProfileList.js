import React from 'react';
import ProfileCard from './ProfileCard';
import SearchFilter from './SearchFilter';

const ProfileList = ({ profiles, onSelectProfile }) => {
  return (
    <div>
      <SearchFilter />
      <div className="profile-list">
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} onSelectProfile={onSelectProfile} />
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
