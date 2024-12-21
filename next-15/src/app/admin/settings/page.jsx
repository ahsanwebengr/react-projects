import Link from 'next/link';
import React from 'react';

const Settings = () => {
  const users = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Bryant', email: 'bryant@gmail.com' },
    { name: 'Alisha', email: 'alisha@gmail.com' },
  ];

  return (
    <div>
      <h2>Settings</h2>
      <ul>
        {users.map(({ name, email }) => (
          <li key={name}>
            <Link href={`/admin/settings/${name}`}>User: {name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
