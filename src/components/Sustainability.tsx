import React from 'react';
import { Leaf, Truck, Recycle, Battery } from 'lucide-react';

export default function Sustainability() {
  const sustainabilityMetrics = [
    {
      label: 'Carbon Offset',
      value: '450',
      unit: 'tons',
      change: '+15%',
      description: 'This quarter',
    },
    {
      label: 'Electric Vehicles',
      value: '65',
      unit: '%',
      change: '+8%',
      description: 'Of total fleet',
    },
    {
      label: 'Green Score',
      value: '92',
      unit: '/100',
      change: '+5',
      description: 'Environmental rating',
    },
  ];

  const initiatives = [
    {
      title: 'Electric Fleet Transition',
      progress: 65,
      description: 'Converting delivery vehicles to electric',
      icon: Battery,
    },
    {
      title: 'Route Optimization',
      progress: 88,
      description: 'AI-powered efficient routing',
      icon: Truck,
    },
    {
      title: 'Packaging Recycling',
      progress: 75,
      description: 'Sustainable packaging program',
      icon: Recycle,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Sustainability Dashboard</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sustainabilityMetrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{metric.label}</h3>
              <Leaf className="text-green-600" size={24} />
            </div>
            <p className="text-3xl font-bold mt-2">
              {metric.value}
              <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
            </p>
            <div className="flex items-center mt-2">
              <span className="text-sm font-medium text-green-600">{metric.change}</span>
              <span className="text-sm text-gray-500 ml-2">{metric.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Carbon Footprint Trend</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Carbon footprint trend"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Green Initiatives Progress</h2>
          <div className="space-y-6">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <initiative.icon className="text-green-600" size={20} />
                    <h3 className="font-medium">{initiative.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{initiative.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 col-span-full">
          <h2 className="text-lg font-semibold mb-4">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Trees Saved',
                value: '1,234',
                description: 'Through paperless operations',
              },
              {
                title: 'Water Saved',
                value: '50,000L',
                description: 'Efficient facility management',
              },
              {
                title: 'Waste Reduced',
                value: '75%',
                description: 'Year over year improvement',
              },
            ].map((impact) => (
              <div key={impact.title} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900">{impact.title}</h3>
                <p className="text-2xl font-bold mt-1">{impact.value}</p>
                <p className="text-sm text-gray-500 mt-1">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}