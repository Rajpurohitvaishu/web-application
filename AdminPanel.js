import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const addProfile = async () => {
    const newProfile = { name, description, address, photoUrl };
    try {
      const response = await axios.post('/api/profiles', newProfile);
      setProfiles([...profiles, response.data]);
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
        <input type="text" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} placeholder="Photo URL" />
        <button onClick={addProfile}>Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;
