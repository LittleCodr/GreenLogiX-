import React from 'react';
import { Truck, AlertTriangle, Clock, MapPin } from 'lucide-react';

export default function RoutePlanning() {
  const routes = [
    {
      id: 1,
      driver: 'John Smith',
      vehicle: 'ET-001',
      status: 'In Progress',
      origin: 'San Francisco, CA',
      destination: 'Los Angeles, CA',
      eta: '2h 30m',
      distance: '383 miles',
      stops: 3,
      efficiency: 92,
    },
    {
      id: 2,
      driver: 'Sarah Johnson',
      vehicle: 'ET-002',
      status: 'Scheduled',
      origin: 'Seattle, WA',
      destination: 'Portland, OR',
      eta: '3h 15m',
      distance: '174 miles',
      stops: 2,
      efficiency: 88,
    },
    {
      id: 3,
      driver: 'Mike Wilson',
      vehicle: 'ET-003',
      status: 'Delayed',
      origin: 'Chicago, IL',
      destination: 'Detroit, MI',
      eta: '4h 45m',
      distance: '282 miles',
      stops: 4,
      efficiency: 78,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Route Planning</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Plan New Route
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Active Routes</h3>
            <Truck className="text-green-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">12</p>
          <p className="text-sm text-gray-500 mt-1">Currently in transit</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Delayed Routes</h3>
            <AlertTriangle className="text-yellow-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">2</p>
          <p className="text-sm text-gray-500 mt-1">Require attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Average Time</h3>
            <Clock className="text-blue-600" size={24} />
          </div>
          <p className="text-3xl font-bold mt-2">3.5h</p>
          <p className="text-sm text-gray-500 mt-1">Per route</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Live Route Map</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="Route map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Active Routes</h2>
          <div className="space-y-4">
            {routes.map((route) => (
              <div
                key={route.id}
                className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-500" />
                    <p className="text-sm text-gray-600">
                      {route.origin} → {route.destination}
                    </p>
                  </div>
                  <p className="font-medium">Driver: {route.driver}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>ETA: {route.eta}</span>
                    <span>•</span>
                    <span>{route.distance}</span>
                    <span>•</span>
                    <span>{route.stops} stops</span>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      route.status === 'In Progress'
                        ? 'bg-green-100 text-green-800'
                        : route.status === 'Delayed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {route.status}
                  </span>
                  <p className="mt-2 text-sm text-gray-500">
                    Efficiency: {route.efficiency}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}