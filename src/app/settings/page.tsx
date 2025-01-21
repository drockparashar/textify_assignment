'use client'

import { motion } from 'framer-motion'
import { 
  Cog6ToothIcon, BellIcon, ShieldCheckIcon,
  SwatchIcon, UserCircleIcon, ExclamationTriangleIcon
} from '@heroicons/react/24/solid'

const settingsSections = [
  {
    title: 'Account',
    icon: UserCircleIcon,
    color: 'blue',
    settings: [
      { name: 'Profile Information', description: 'Update your personal details' },
      { name: 'Email Settings', description: 'Manage your email preferences' },
      { name: 'Password', description: 'Change your password' },
    ]
  },
  {
    title: 'Appearance',
    icon: SwatchIcon,
    color: 'violet',
    settings: [
      { name: 'Theme', description: 'Choose your preferred theme' },
      { name: 'Layout', description: 'Customize your dashboard layout' },
    ]
  },
  {
    title: 'Notifications',
    icon: BellIcon,
    color: 'amber',
    settings: [
      { name: 'Email Notifications', description: 'Configure email alerts' },
      { name: 'Push Notifications', description: 'Manage push notifications' },
    ]
  },
]

export default function Settings() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E293B] to-[#0F172A] p-8 mb-6"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <Cog6ToothIcon className="h-6 w-6 text-violet-400" />
            <span className="text-violet-400 font-medium">Settings & Preferences</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Customize Your Experience
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Manage your account settings and set your preferences
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full blur-2xl" />
        </div>
      </motion.div>

      {/* Settings Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Settings */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${section.color}-100 flex items-center justify-center`}>
                  <section.icon className={`h-5 w-5 text-${section.color}-600`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div key={setting.name} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div>
                      <h3 className="text-gray-900 font-medium">{setting.name}</h3>
                      <p className="text-gray-500 text-sm">{setting.description}</p>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Danger Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-red-600">Danger Zone</h2>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="text-red-900 font-medium">Delete Account</h3>
              <p className="text-red-600 text-sm mt-1">This action cannot be undone.</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Settings */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Security Overview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Security Overview</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Account Protected</p>
                  <p className="text-gray-500 text-sm">2-factor authentication is on</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                Security Settings
              </button>
            </div>
          </motion.div>

          {/* Connected Accounts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Connected Accounts</h2>
            <div className="space-y-4">
              {['Google', 'GitHub', 'LinkedIn'].map((account) => (
                <div key={account} className="flex items-center justify-between">
                  <span className="text-gray-600">{account}</span>
                  <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}