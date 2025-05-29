import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      <aside className={`bg-white shadow-md w-64 space-y-4 p-4 fixed inset-y-0 left-0 transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 z-50`}>
        <h2 className="text-xl font-bold mb-4">DeltaBuddy</h2>
        <nav className="flex flex-col space-y-2 text-sm">
          <Link href="/" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/greeks/nifty" className="hover:text-blue-600">Live Greeks</Link>
          <Link href="/open-interest/overview" className="hover:text-blue-600">Open Interest</Link>
          <Link href="/option-chain/nifty" className="hover:text-blue-600">Option Chain</Link>
          <Link href="/pcr" className="hover:text-blue-600">PCR</Link>
          <Link href="/fii-dii/cash" className="hover:text-blue-600">FII/DII</Link>
          <Link href="/strategies/intraday" className="hover:text-blue-600">Strategies</Link>
          <Link href="/events/india" className="hover:text-blue-600">Events</Link>
          <Link href="/plans" className="hover:text-blue-600">Plans</Link>
        </nav>
      </aside>
      <div className="flex-1 md:ml-64 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center md:hidden">
          <button onClick={() => setOpen(!open)} className="text-sm font-medium">☰ Menu</button>
          <Link href="/login" className="text-sm">Login</Link>
        </header>
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
        <footer className="text-center text-sm text-gray-500 p-4">
          contact@deltabuddy.com | Connect on Telegram
        </footer>
      </div>
    </div>
  );
}