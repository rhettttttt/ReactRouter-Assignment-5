import { useState } from 'react';
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
  const handleSubmit = e => e.preventDefault();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-4"
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
                onChange={e => setForm({ ...form, firstName: e.target.value })}
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
                onChange={e => setForm({ ...form, lastName: e.target.value })}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                required
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
              required
            />
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
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
            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Confirm Password
              </span>
              <input
                type="password"
                value={form.password2}
                onChange={e => setForm({ ...form, password2: e.target.value })}
                className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring focus:ring-blue-200"
                required
              />
            </label>
          </div>
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
