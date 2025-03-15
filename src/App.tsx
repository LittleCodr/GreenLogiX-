import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  BarChart3,
  Box,
  Truck,
  LineChart,
  AlertTriangle,
  Map,
  Leaf,
  Settings,
  Menu,
  X,
} from 'lucide-react';

// Components for each route
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import RoutePlanning from './components/RoutePlanning';
import Analytics from './components/Analytics';
import RiskManagement from './components/RiskManagement';
import Sustainability from './components/Sustainability';
import SettingsPage from './components/Settings';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const location = useLocation();
  const navItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/' },
    { icon: Box, label: 'Inventory', path: '/inventory' },
    { icon: Map, label: 'Route Planning', path: '/route-planning' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: AlertTriangle, label: 'Risk Management', path: '/risk-management' },
    { icon: Leaf, label: 'Sustainability', path: '/sustainability' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed lg:relative lg:translate-x-0 z-30 w-64 bg-green-800 min-h-screen transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-2 text-white mb-8">
          <Truck size={32} />
          <h1 className="text-xl font-bold">GreenLogiX</h1>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-green-700 w-full p-3 rounded-lg transition-colors ${
                location.pathname === item.path ? 'bg-green-700 text-white' : ''
              }`}
              onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 overflow-x-hidden">
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Admin</span>
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/route-planning" element={<RoutePlanning />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;