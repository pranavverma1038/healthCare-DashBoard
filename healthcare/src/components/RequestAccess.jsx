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
      <h3 className="text-xl font-semibold mb-2">Request Access to Restricted Records</h3>
      <ul>
        {restricted.map(r => (
          <motion.li
            key={r.id}
            className="mb-2 flex items-center justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <span>{r.type} ({r.description})</span>
            <motion.button
              whileHover={{ scale: 1.08 }}
              className="ml-4 px-2 py-1 bg-green-600 text-white rounded shadow"
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