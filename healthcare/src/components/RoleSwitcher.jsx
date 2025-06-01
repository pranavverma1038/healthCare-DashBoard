import { useRole } from '../context/RoleContext';
import { motion } from 'framer-motion';

export default function RoleSwitcher() {
  const { role, setRole } = useRole();
  return (
    <motion.div
      className="flex gap-4 items-center my-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-semibold">Role:</span>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded ${role === 'patient' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        onClick={() => setRole('patient')}
      >
        Patient
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded ${role === 'doctor' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
        onClick={() => setRole('doctor')}
      >
        Doctor
      </motion.button>
    </motion.div>
  );
} 