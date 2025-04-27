"use client";

import Calculator from '@/components/Calculator';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '@/app/icons';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 transition-colors duration-200">
      <div className="absolute top-4 right-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Scientific Calculator</h1>
        <p className="text-gray-600 dark:text-gray-400">Built with Next.js and TypeScript</p>
      </header>
      
      <main className="w-full flex justify-center">
        <Calculator />
      </main>
      
      <div className="mt-4 p-3 rounded border text-sm max-w-md w-full" 
        style={{
          backgroundColor: 'var(--tips-bg)',
          borderColor: 'var(--tips-border)',
          color: 'var(--tips-text)'
        }}>
        <p><strong>Tips:</strong></p>
        <ul className="list-disc pl-5 mt-1">
          <li>Trigonometric functions (sin, cos, tan) use degrees</li>
          <li>Enter a value first, then click a function button</li>
          <li>For π and e, click the button to get their value</li>
          <li>Click "Show History" to view past calculations</li>
        </ul>
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Scientific Calculator App</p>
      </footer>
    </div>
  );
}