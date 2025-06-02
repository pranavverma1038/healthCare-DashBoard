import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function AssignedPatients() {
  const { patients } = useData();
 
  const assigned = patients.filter(p => p.assignedDoctor === 'd1');
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Assigned Patients</h3>
      <ul>
        {assigned.map(p => (
          <motion.li
            key={p.id}
            className="mb-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 shadow border border-blue-200 dark:border-blue-700 font-medium text-blue-900 dark:text-blue-100 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-semibold">{p.name}</span> <span className="ml-2 text-xs text-purple-700 dark:text-purple-300">(Age: {p.age}, Gender: {p.gender})</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
} 