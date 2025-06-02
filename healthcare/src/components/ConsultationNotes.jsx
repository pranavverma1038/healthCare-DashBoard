import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ConsultationNotes() {
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);
  const [notes, setNotes] = useState([]);
  const [expandedIdx, setExpandedIdx] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    setNotes([
      ...notes,
      {
        description: note,
        date: new Date().toLocaleString(),
      },
    ]);
    setSuccess(true);
    setNote('');
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">Add Consultation Notes</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center mb-4">
        <input
          type="text"
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Enter note..."
          className="border p-1 flex-1"
        />
        <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Add Note</button>
        {success && <span className="text-green-600 ml-2">Note added!</span>}
      </form>
      {notes.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <h4 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">Consultation Notes</h4>
          <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-blue-900 dark:text-blue-100">
                <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Date & Time</th>
                <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Description</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((n, idx) => (
                <tr
                  key={n.date + n.description}
                  className={
                    (idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-blue-50 dark:bg-blue-900') +
                    ' cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800 transition'
                  }
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                >
                  <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words text-gray-600 dark:text-gray-200 font-semibold whitespace-nowrap">{n.date}</td>
                  <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words text-purple-700 dark:text-purple-300 break-words max-w-xs md:max-w-md">
                    {expandedIdx === idx
                      ? n.description
                      : n.description.length > 40
                        ? n.description.slice(0, 40) + '... (click to expand)'
                        : n.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
} 