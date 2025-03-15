import React from 'react';
import { LineChart } from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    { label: 'Carbon Saved', value: '2.5k', unit: 'tons', change: '+12%' },
    { label: 'Active Shipments', value: '1.2k', unit: 'packages', change: '+8%' },
    { label: 'On-Time Delivery', value: '96', unit: '%', change: '+3%' },
    { label: 'Fleet Efficiency', value: '89', unit: '%', change: '+5%' },
  ];

  return (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium">{metric.label}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
              <p className="ml-2 text-sm text-gray-500">{metric.unit}</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
              {metric.change}
            </span>
          </div>
        ))}
      </div>

      {/* Main Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map View */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Live Fleet Tracking</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Map visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Analytics View */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Carbon Footprint Analysis</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Analytics visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Active Shipments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Active Shipments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Shipment #{i}23456</p>
                  <p className="text-sm text-gray-500">New York → Los Angeles</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  On Track
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Risk Assessment</h2>
          <div className="space-y-4">
            {[
              { risk: 'Weather Alert', level: 'Medium', region: 'Midwest' },
              { risk: 'Route Congestion', level: 'Low', region: 'East Coast' },
              { risk: 'Supply Delay', level: 'High', region: 'West Coast' },
            ].map((risk, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{risk.risk}</p>
                  <p className="text-sm text-gray-500">{risk.region}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    risk.level === 'High'
                      ? 'bg-red-100 text-red-800'
                      : risk.level === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {risk.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}