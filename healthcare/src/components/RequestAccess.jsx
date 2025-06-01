import { useState } from 'react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function RequestAccess() {
  const { records } = useData();
  const [success, setSuccess] = useState(false);
 
  const restricted = records.filter(r => r.restricted);
  const handleRequest = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Request Access to Restricted Records</h3>
      <ul>
        {restricted.map(r => (
          <motion.li
            key={r.id}
            className="mb-3 flex items-center justify-between bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900 rounded-xl px-4 py-3 shadow-md border border-green-200 dark:border-green-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-medium text-green-800 dark:text-green-200">{r.type} ({r.description})</span>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="ml-4 px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-md font-semibold border-2 border-white dark:border-gray-900"
              onClick={handleRequest}
            >
              Request Access
            </motion.button>
          </motion.li>
        ))}
      </ul>
      {success && <div className="text-green-600 mt-2">Request sent!</div>}
    </div>
  );
} 