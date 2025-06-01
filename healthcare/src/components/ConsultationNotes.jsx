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
      <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
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
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-300">Consultation Notes</h4>
          <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:from-green-800 dark:via-blue-800 dark:to-purple-800 text-green-900 dark:text-green-100">
                <th className="px-3 py-2">Date & Time</th>
                <th className="px-3 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((n, idx) => (
                <tr
                  key={n.date + n.description}
                  className={
                    (idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-green-50 dark:bg-green-900') +
                    ' cursor-pointer hover:bg-green-100 dark:hover:bg-green-800 transition'
                  }
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                >
                  <td className="px-3 py-2 text-gray-600 dark:text-gray-200 font-semibold">{n.date}</td>
                  <td className="px-3 py-2 text-green-700 dark:text-green-300">
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