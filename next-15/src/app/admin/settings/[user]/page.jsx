'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const UserSettings = () => {
  const params = useParams();
  const { user } = params;

  return (
    <div>
      <h1>User Settings</h1>
      <p>Viewing settings for: {user}</p>
    </div>
  );
};

export default UserSettings;
