import './App.css';
import { useEffect, useState } from 'react';
import { RoleProvider, useRole } from './context/RoleContext';
import { DataProvider } from './context/DataContext';
import RoleSwitcher from './components/RoleSwitcher';
import PatientDashboard from './components/PatientDashboard';
import DoctorDashboard from './components/DoctorDashboard';

function Dashboard() {
  const { role } = useRole();
  return role === 'patient' ? <PatientDashboard /> : <DoctorDashboard />;
}

function DarkModeToggle({ dark, setDark }) {
  return (
    <button
      className="fixed top-6 right-8 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg font-bold focus:outline-none border-2 border-white dark:border-gray-900 transition-all hover:scale-105"
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? 'Dark' : 'Light'}
    </button>
  );
}

function App() {
  const [dark, setDark] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <RoleProvider>
      <DataProvider>
        <div className={
          `min-h-screen w-full flex flex-col items-center justify-start py-8 px-2 transition-colors duration-500 ` +
          (dark ? 'bg-black text-white' : 'bg-white text-black')
        }>
          <DarkModeToggle dark={dark} setDark={setDark} />
          <div className={
            `w-full max-w-3xl rounded-2xl shadow-2xl p-8 border ` +
            (dark
              ? 'bg-black/90 border-gray-800 text-white'
              : 'bg-white/90 border-purple-200 text-black')
          }>
            <h1 className={
              `text-4xl font-extrabold mb-6 text-transparent bg-clip-text ` +
              (dark
                ? 'bg-gradient-to-r from-gray-200 via-gray-400 to-white'
                : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500')
            }>Healthcare Dashboard</h1>
            <RoleSwitcher />
            <Dashboard />
          </div>
        </div>
      </DataProvider>
    </RoleProvider>
  );
}

export default App;
