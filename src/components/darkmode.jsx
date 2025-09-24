// DarkModeToggle.jsx
import { useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        w-12 h-6 rounded-full p-1 transition-all duration-300
        ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
      `}
    >
      <div className={`
        w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300
        ${isDark ? 'translate-x-6' : 'translate-x-0'}
      `} />
    </button>
  );
}