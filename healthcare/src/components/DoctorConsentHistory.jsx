import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

export default function DoctorConsentHistory() {
  const { consentHistory } = useData();
  // For demo, use doctorId 'd1'
  const history = consentHistory.filter(c => c.doctorId === 'd1');
  return (
    <>
      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">Consent History (Doctor View)</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-blue-900 dark:text-blue-100">
              <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Action</th>
              <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Why</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, idx) => (
              <tr key={item.id} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-blue-50 dark:bg-blue-900'}>
                <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words font-semibold text-purple-700 dark:text-purple-300">{item.action}</td>
                <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words text-green-700 dark:text-green-300">{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
} 