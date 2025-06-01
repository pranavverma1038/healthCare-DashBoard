import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function AccessManager() {
  const { records } = useData();
 
  const patientRecords = records.filter(r => r.patientId === 'p1' && r.restricted);
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-pink-700 dark:text-pink-300">Manage Access</h3>
      <ul>
        {patientRecords.map(record => (
          <motion.li
            key={record.id}
            className="mb-3 flex items-center justify-between bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 rounded-xl px-4 py-3 shadow border border-purple-200 dark:border-purple-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1 }}
          >
            <span className="font-medium text-purple-800 dark:text-purple-200">{record.type}: {record.description}</span>
            <motion.button
              whileHover={{ scale: 1 }}
              className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow font-semibold border-2 border-white dark:border-gray-900"
            >
              Grant/Revoke
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
} 