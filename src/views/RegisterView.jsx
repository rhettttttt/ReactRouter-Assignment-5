import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegisterView() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.password2) {
      alert('Passwords do not match.');
      return;
    }
    // TODO: real registration here
    navigate('/movies');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                First Name
              </span>
              <input
                type="text"
                value={form.firstName}
                onChange={e =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Last Name
              </span>
              <input
                type="text"
                value={form.lastName}
                onChange={e =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                required
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
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
            <span className="text-sm font-medium text-gray-700">
              Password
            </span>
            <input
              type="password"
              value={form.password}
              onChange={e =>
                setForm({ ...form, password: e.target.value })
              }
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Confirm Password
            </span>
            <input
              type="password"
              value={form.password2}
              onChange={e =>
                setForm({ ...form, password2: e.target.value })
              }
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full py-2 rounded bg-green-600 hover:bg-green-500 text-white font-semibold transition"
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
