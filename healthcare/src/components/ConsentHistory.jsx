import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function ConsentHistory() {
  const { consentHistory } = useData();
  // For demo, use patientId 'p1'
  const history = consentHistory.filter(c => c.patientId === 'p1');
  return (
    <>
      <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">Consent History</h3>
      <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 dark:from-purple-800 dark:via-pink-800 dark:to-blue-800 text-purple-900 dark:text-purple-100">
            <th className="px-3 py-2">Doctor</th>
            <th className="px-3 py-2">Record</th>
            <th className="px-3 py-2">Action</th>
            <th className="px-3 py-2">When</th>
            <th className="px-3 py-2">Why</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, idx) => (
            <tr key={item.id} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-purple-50 dark:bg-purple-900'}>
              <td className="px-3 py-2 font-semibold text-blue-700 dark:text-blue-300">{item.doctorId}</td>
              <td className="px-3 py-2 text-purple-700 dark:text-purple-300">{item.recordId}</td>
              <td className="px-3 py-2 text-pink-700 dark:text-pink-300">{item.action}</td>
              <td className="px-3 py-2 text-gray-600 dark:text-gray-200">{new Date(item.timestamp).toLocaleString()}</td>
              <td className="px-3 py-2 text-green-700 dark:text-green-300">{item.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
} 