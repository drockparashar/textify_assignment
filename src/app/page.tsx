'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'
import { ArrowUpIcon, ArrowDownIcon, SparklesIcon, BoltIcon, FireIcon, StarIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const areaData = [
  { name: 'Mon', value: 4000, projects: 24 },
  { name: 'Tue', value: 3000, projects: 22 },
  { name: 'Wed', value: 5000, projects: 28 },
  { name: 'Thu', value: 2780, projects: 20 },
  { name: 'Fri', value: 4890, projects: 29 },
  { name: 'Sat', value: 3390, projects: 23 },
  { name: 'Sun', value: 4490, projects: 26 },
]

export default function Home() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Creative Header with Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 mb-6"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <SparklesIcon className="h-6 w-6 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Premium Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Your Creative Pulse
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Track your creative projects and performance metrics in a whole new way
          </p>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-2xl" />
        </div>
      </motion.div>

      {/* Quick Actions Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: BoltIcon, label: 'Quick Analysis', color: 'bg-amber-500' },
          { icon: FireIcon, label: 'Trending Now', color: 'bg-rose-500' },
          { icon: StarIcon, label: 'Favorites', color: 'bg-blue-500' },
          { icon: SparklesIcon, label: 'AI Insights', color: 'bg-violet-500' },
        ].map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-4 flex items-center space-x-3">
              <div className={`p-2 rounded-xl ${action.color}`}>
                <action.icon className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium text-gray-700">{action.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Performance Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-8 bg-white rounded-3xl shadow-sm overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Creative Performance</h2>
                <p className="text-gray-500">Real-time project analytics</p>
              </div>
              <div className="flex space-x-2">
                {['1D', '1W', '1M', '1Y'].map((period) => (
                  <button
                    key={period}
                    className="px-3 py-1 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#FFF',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    fill="url(#colorValue)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {[
            { title: 'Active Projects', value: '32', change: '+14%', isPositive: true, color: 'violet' },
            { title: 'Team Velocity', value: '89%', change: '+23%', isPositive: true, color: 'blue' },
            { title: 'Resources Used', value: '67%', change: '-3%', isPositive: false, color: 'amber' },
          ].map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={stat.title}
              className={`bg-gradient-to-br from-${stat.color}-50 to-white p-6 rounded-3xl shadow-sm border border-${stat.color}-100`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</h3>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  stat.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {stat.isPositive ? (
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-12 bg-white rounded-3xl shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Project Timeline</h2>
              <p className="text-gray-500">Track your ongoing projects</p>
            </div>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors">
              + New Project
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Team
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="group hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-medium">
                          P{item}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Project Nova</div>
                          <div className="text-sm text-gray-500">Web Development</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-violet-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">45% Complete</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((member) => (
                          <div
                            key={member}
                            className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                          >
                            T{member}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}