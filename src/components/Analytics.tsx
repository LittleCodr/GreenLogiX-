import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export default function Analytics() {
  const performanceMetrics = [
    {
      label: 'Carbon Emissions',
      current: '125',
      previous: '150',
      unit: 'tons',
      trend: 'down',
      change: '-16.7%',
    },
    {
      label: 'Fuel Efficiency',
      current: '8.2',
      previous: '7.8',
      unit: 'mpg',
      trend: 'up',
      change: '+5.1%',
    },
    {
      label: 'Route Optimization',
      current: '94',
      previous: '89',
      unit: '%',
      trend: 'up',
      change: '+5.6%',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performanceMetrics.map((metric) => (
          <div key={metric.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{metric.label}</h3>
              {metric.trend === 'up' ? (
                <TrendingUp className="text-green-600" size={24} />
              ) : (
                <TrendingDown className="text-red-600" size={24} />
              )}
            </div>
            <p className="text-3xl font-bold mt-2">
              {metric.current}
              <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
            </p>
            <div className="flex items-center mt-2">
              <span
                className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Carbon Emissions Trend</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Carbon emissions chart"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Route Efficiency Analysis</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Route efficiency chart"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 col-span-full">
          <h2 className="text-lg font-semibold mb-4">Performance Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Peak Performance Hours',
                value: '10 AM - 2 PM',
                description: 'Optimal delivery window',
                trend: 'positive',
              },
              {
                title: 'Average Delivery Time',
                value: '45 minutes',
                description: '12% faster than last month',
                trend: 'positive',
              },
              {
                title: 'Vehicle Utilization',
                value: '87%',
                description: '3% increase in efficiency',
                trend: 'positive',
              },
              {
                title: 'Customer Satisfaction',
                value: '4.8/5',
                description: 'Based on 1,200 reviews',
                trend: 'neutral',
              },
            ].map((insight) => (
              <div
                key={insight.title}
                className="p-4 bg-gray-50 rounded-lg flex items-start space-x-4"
              >
                <Activity
                  size={24}
                  className={
                    insight.trend === 'positive' ? 'text-green-600' : 'text-blue-600'
                  }
                />
                <div>
                  <h3 className="font-medium text-gray-900">{insight.title}</h3>
                  <p className="text-2xl font-bold mt-1">{insight.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}