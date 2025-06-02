import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UploadDocument() {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) return;
    setUploads([
      ...uploads,
      {
        name: file.name,
        date: new Date().toLocaleString(),
        file: file,
      },
    ]);
    setSuccess(true);
    setFile(null);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">Upload New Health Document</h3>
      <form onSubmit={handleUpload} className="flex gap-2 items-center mb-4">
        <input type="file" onChange={e => setFile(e.target.files[0])} className="border p-1" />
        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Upload</button>
        {success && <span className="text-green-600 ml-2">Uploaded!</span>}
      </form>
      {uploads.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">Uploaded Files</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-blue-900 dark:text-blue-100">
                  <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">File Name</th>
                  <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Uploaded Date & Time</th>
                  <th className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">Download</th>
                </tr>
              </thead>
              <tbody>
                {uploads.map((u, idx) => (
                  <tr key={u.name + u.date} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-blue-50 dark:bg-blue-900'}>
                    <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words font-semibold text-purple-700 dark:text-purple-300">{u.name}</td>
                    <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words text-gray-600 dark:text-gray-200">{u.date}</td>
                    <td className="px-1 py-1 text-xs sm:px-3 sm:py-2 sm:text-base whitespace-normal break-words">
                      <a
                        href={URL.createObjectURL(u.file)}
                        download={u.name}
                        className="px-3 py-1 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </motion.div>
  );
} 