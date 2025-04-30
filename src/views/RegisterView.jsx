import React from 'react';

export default function RegisterView() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="First Name" className="p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <input type="password" placeholder="Re-enter Password" className="p-2 border rounded" />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
