import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function HealthRecords() {
  const { records } = useData();
 
  const patientRecords = records.filter(r => r.patientId === 'p1');
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Health Records</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patientRecords.map(record => (
          <motion.div
            key={record.id}
            className="p-6 border-2 rounded-xl bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg border-purple-200 dark:border-purple-700 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1.04, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 0px 0px rgba(80,0,120,0.12)' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 flex text-center justify-center text-white text-lg font-bold shadow">
                {record.type[0]}
              </span>
              <div className="font-bold text-blue-700 dark:text-blue-300 text-lg">{record.type}</div>
            </div>
            <div className="mb-2 text-gray-700 dark:text-gray-200">{record.description}</div>
            <div className="text-xs text-pink-600 dark:text-pink-300 font-semibold">Restricted: {record.restricted ? 'Yes' : 'No'}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
