import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CompanyInfo from './components/CompanyInfo';
import DataTable from './components/DataTable';
import { Menu, PanelLeftClose, PanelLeft } from 'lucide-react';
import { customers, suppliers, products, bankAccounts, employees } from './data';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const formatCurrency = (value: number | null) =>
    value ? `KES ${value.toLocaleString()}` : 'N/A';

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'company':
        return <CompanyInfo />;
      case 'customers':
        return (
          <DataTable
            title="Customers"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'contacts', label: 'Contacts' },
              { key: 'telephone', label: 'Telephone' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={customers}
          />
        );
      case 'products':
        return (
          <DataTable
            title="Products"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'category', label: 'Category' },
              { key: 'description', label: 'Description' },
              {
                key: 'buyingPrice',
                label: 'Buying Price',
                format: formatCurrency,
              },
              {
                key: 'sellingPrice',
                label: 'Selling Price',
                format: formatCurrency,
              },
              { key: 'inStock', label: 'In Stock' },
            ]}
            data={products}
          />
        );
      case 'suppliers':
        return (
          <DataTable
            title="Suppliers"
            columns={[
              { key: 'name', label: 'Name' },
              { key: 'contacts', label: 'Contacts' },
              { key: 'telephone', label: 'Telephone' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={suppliers}
          />
        );
      case 'banking':
        return (
          <DataTable
            title="Bank Accounts"
            columns={[
              { key: 'name', label: 'Account Name' },
              {
                key: 'openingBalance',
                label: 'Opening Balance',
                format: formatCurrency,
              },
            ]}
            data={bankAccounts}
          />
        );
      case 'employees':
        return (
          <DataTable
            title="Employees"
            columns={[
              { key: 'name', label: 'Name' },
              {
                key: 'grossSalary',
                label: 'Gross Salary',
                format: formatCurrency,
              },
              {
                key: 'nhifDeduction',
                label: 'NHIF Deduction',
                format: formatCurrency,
              },
              { key: 'nssf', label: 'NSSF', format: formatCurrency },
            ]}
            data={employees}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-900 text-white"
      >
        <Menu size={24} />
      </button>

      {/* Desktop sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="hidden lg:flex fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-900 text-white hover:bg-gray-700 transition-colors"
        title={isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
      >
        {isSidebarOpen ? <PanelLeftClose size={24} /> : <PanelLeft size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${
          isSidebarOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'
        } transition-transform duration-200 ease-in-out z-40`}
      >
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileSidebarOpen(false);
          }}
        />
      </div>

      {/* Main content */}
      <main className={`flex-1 overflow-x-hidden overflow-y-auto pt-16 lg:pt-16 ${
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
      } transition-all duration-200`}>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;