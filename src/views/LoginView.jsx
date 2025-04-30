import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginView() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: real auth here
    navigate('/movies');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Log In</h2>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700">
              Email
            </span>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <label className="block">
            <span className="block text-sm font-medium text-gray-700">
              Password
            </span>
            <input
              type="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
          >
            Log In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
