import React from 'react';
import { Building2, Users, Store, Truck, CreditCard, Users2, LayoutDashboard } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'products', label: 'Products', icon: Store },
    { id: 'suppliers', label: 'Suppliers', icon: Truck },
    { id: 'banking', label: 'Banking', icon: CreditCard },
    { id: 'employees', label: 'Employees', icon: Users2 },
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-lg lg:text-xl font-bold">Kensale Supermarket</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg mb-1 lg:mb-2 transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm lg:text-base">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}