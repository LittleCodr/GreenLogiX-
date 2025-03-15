import React from 'react';
import { Package2, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

export default function Inventory() {
  const inventoryItems = [
    {
      id: 1,
      name: 'Electric Trucks',
      quantity: 45,
      status: 'Optimal',
      location: 'West Coast Hub',
      lastUpdated: '2 hours ago',
      trend: 'up',
    },
    {
      id: 2,
      name: 'Delivery Drones',
      quantity: 120,
      status: 'Low Stock',
      location: 'East Coast Hub',
      lastUpdated: '1 hour ago',
      trend: 'down',
    },
    {
      id: 3,
      name: 'Smart Containers',
      quantity: 500,
      status: 'Optimal',
      location: 'Central Hub',
      lastUpdated: '30 mins ago',
      trend: 'up',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Add New Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Items</h3>
            <Package2 className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">665</p>
          <p className="text-sm text-gray-500 mt-1">Across all locations</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Low Stock Alerts</h3>
            <ArrowDownCircle className="text-red-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">3</p>
          <p className="text-sm text-gray-500 mt-1">Items need attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Optimal Stock</h3>
            <ArrowUpCircle className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-sm text-gray-500 mt-1">Items at optimal levels</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Inventory Items</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.quantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.status === 'Optimal'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.lastUpdated}
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