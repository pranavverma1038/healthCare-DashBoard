import { useEffect } from 'react';

export default function Notification({ message, description, show }) {
  if (!show) return null;
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-black px-6 py-4 rounded-xl shadow-2xl z-50 transition-all min-w-[360px] max-w-xs text-center text-font-bold text-9xl">
      <div className="text-lg font-bold mb-1">{message}</div>
      {description && <div className="text-sm opacity-90">{description}</div>}
    </div>
  );
} 