import React from 'react';
import { Bell, Lock, User, Globe, Database, Palette } from 'lucide-react';

export default function Settings() {
  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { name: 'Push Notifications', enabled: true },
        { name: 'Email Alerts', enabled: true },
        { name: 'SMS Updates', enabled: false },
      ],
    },
    {
      title: 'Security',
      icon: Lock,
      settings: [
        { name: 'Two-Factor Authentication', enabled: true },
        { name: 'Login History', enabled: true },
        { name: 'API Access', enabled: false },
      ],
    },
    {
      title: 'Account',
      icon: User,
      settings: [
        { name: 'Profile Visibility', enabled: true },
        { name: 'Activity Log', enabled: true },
        { name: 'Team Access', enabled: true },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <User size={32} className="text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Admin User</h2>
                <p className="text-sm text-gray-500">admin@greenlogix.com</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Edit Profile
              </button>
              <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="lg:col-span-2 space-y-6">
          {settingsSections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="text-green-600" size={24} />
                <h2 className="text-lg font-semibold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div
                    key={setting.name}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="text-gray-700">{setting.name}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.enabled}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">System Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Globe, title: 'Language', value: 'English (US)' },
                { icon: Database, title: 'Data Storage', value: '230 GB / 500 GB' },
                { icon: Palette, title: 'Theme', value: 'Light Mode' },
              ].map((pref) => (
                <div
                  key={pref.title}
                  className="p-4 bg-gray-50 rounded-lg flex items-center space-x-3"
                >
                  <pref.icon className="text-green-600" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{pref.title}</p>
                    <p className="text-sm text-gray-500">{pref.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}