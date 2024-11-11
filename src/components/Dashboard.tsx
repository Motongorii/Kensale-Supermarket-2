import React from 'react';
import { customers, products, suppliers, bankAccounts, employees } from '../data';
import { Users, Store, Truck, CreditCard, Users2 } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Customers',
      value: customers.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Products',
      value: products.length,
      icon: Store,
      color: 'bg-green-500',
    },
    {
      title: 'Total Suppliers',
      value: suppliers.length,
      icon: Truck,
      color: 'bg-purple-500',
    },
    {
      title: 'Bank Accounts',
      value: bankAccounts.length,
      icon: CreditCard,
      color: 'bg-yellow-500',
    },
    {
      title: 'Employees',
      value: employees.length,
      icon: Users2,
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="p-4 lg:p-6">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 lg:p-6 flex items-center space-x-4"
            >
              <div className={`${stat.color} p-3 lg:p-4 rounded-lg`}>
                <Icon className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-xl lg:text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold mb-4">Recent Products</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-xs lg:text-sm">Name</th>
                  <th className="text-left py-2 text-xs lg:text-sm">Category</th>
                  <th className="text-right py-2 text-xs lg:text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(0, 5).map((product, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 text-xs lg:text-sm">{product.name}</td>
                    <td className="py-2 text-xs lg:text-sm">{product.category}</td>
                    <td className="py-2 text-right text-xs lg:text-sm">
                      {product.sellingPrice ? `KES ${product.sellingPrice}` : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold mb-4">Recent Customers</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-xs lg:text-sm">Name</th>
                  <th className="text-right py-2 text-xs lg:text-sm">Opening Balance</th>
                </tr>
              </thead>
              <tbody>
                {customers.slice(0, 5).map((customer, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 text-xs lg:text-sm">{customer.name}</td>
                    <td className="py-2 text-right text-xs lg:text-sm">
                      {customer.openingBalance
                        ? `KES ${customer.openingBalance}`
                        : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}