import React from 'react';
import { AlertTriangle, Shield, AlertCircle } from 'lucide-react';

export default function RiskManagement() {
  const riskMetrics = [
    {
      label: 'Active Alerts',
      value: '5',
      description: '2 high priority',
      icon: AlertTriangle,
      color: 'red',
    },
    {
      label: 'Risk Score',
      value: '82/100',
      description: 'Good standing',
      icon: Shield,
      color: 'green',
    },
    {
      label: 'Monitored Routes',
      value: '24',
      description: 'All regions',
      icon: AlertCircle,
      color: 'blue',
    },
  ];

  const activeAlerts = [
    {
      id: 1,
      type: 'Weather',
      description: 'Severe storm warning in Midwest region',
      impact: 'High',
      time: '2 hours ago',
      status: 'Active',
    },
    {
      id: 2,
      type: 'Traffic',
      description: 'Major congestion on I-95 corridor',
      impact: 'Medium',
      time: '1 hour ago',
      status: 'Monitoring',
    },
    {
      id: 3,
      type: 'Supply Chain',
      description: 'Potential delay in warehouse operations',
      impact: 'Low',
      time: '30 mins ago',
      status: 'Resolved',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Risk Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {riskMetrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{metric.label}</h3>
              <metric.icon
                className={`text-${metric.color}-600`}
                size={24}
              />
            </div>
            <p className="text-3xl font-bold mt-2">{metric.value}</p>
            <p className="text-sm text-gray-500 mt-1">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Risk Heat Map</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Risk heat map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Active Alerts</h2>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle
                      size={16}
                      className={`${
                        alert.impact === 'High'
                          ? 'text-red-500'
                          : alert.impact === 'Medium'
                          ? 'text-yellow-500'
                          : 'text-green-500'
                      }`}
                    />
                    <span className="font-medium">{alert.type}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    alert.status === 'Active'
                      ? 'bg-red-100 text-red-800'
                      : alert.status === 'Monitoring'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 col-span-full">
          <h2 className="text-lg font-semibold mb-4">Risk Prevention Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Weather Monitoring',
                description: 'Real-time weather tracking and route adjustments',
                status: 'Active',
              },
              {
                title: 'Route Analysis',
                description: 'AI-powered risk assessment for all routes',
                status: 'Active',
              },
              {
                title: 'Supply Chain Verification',
                description: 'Continuous monitoring of supplier reliability',
                status: 'Active',
              },
            ].map((measure) => (
              <div key={measure.title} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900">{measure.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{measure.description}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                  {measure.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}