'use client'

import { motion } from 'framer-motion'
import { 
  AreaChart, Area,  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import { 
  ChartBarIcon, CursorArrowRaysIcon, 
  UserGroupIcon, GlobeAltIcon 
} from '@heroicons/react/24/solid'

const performanceData = [
  { month: 'Jan', users: 4000, engagement: 2400, retention: 2400 },
  { month: 'Feb', users: 3000, engagement: 1398, retention: 2210 },
  { month: 'Mar', users: 2000, engagement: 9800, retention: 2290 },
  { month: 'Apr', users: 2780, engagement: 3908, retention: 2000 },
  { month: 'May', users: 1890, engagement: 4800, retention: 2181 },
  { month: 'Jun', users: 2390, engagement: 3800, retention: 2500 },
]

const geographicData = [
  { region: 'North America', users: 4500, growth: '+12%' },
  { region: 'Europe', users: 3800, growth: '+18%' },
  { region: 'Asia Pacific', users: 3200, growth: '+25%' },
  { region: 'Latin America', users: 2100, growth: '+15%' },
]

const insightCards = [
  {
    title: 'Peak Activity Time',
    value: '2-4 PM EST',
    insight: 'User engagement highest during afternoon hours',
    icon: CursorArrowRaysIcon,
    color: 'violet'
  },
  {
    title: 'Most Active Region',
    value: 'North America',
    insight: '45% of total user base',
    icon: GlobeAltIcon,
    color: 'blue'
  },
  {
    title: 'User Retention',
    value: '78%',
    insight: '12% increase from last month',
    icon: UserGroupIcon,
    color: 'emerald'
  },
]

export default function Analytics() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E293B] to-[#0F172A] p-8 mb-6"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <ChartBarIcon className="h-6 w-6 text-blue-400" />
            <span className="text-blue-400 font-medium">Analytics Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Performance Insights
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Dive deep into your metrics and discover actionable insights
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full blur-2xl" />
        </div>
      </motion.div>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {insightCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <div className={`w-12 h-12 rounded-xl bg-${card.color}-100 flex items-center justify-center mb-4`}>
              <card.icon className={`h-6 w-6 text-${card.color}-600`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">{card.value}</div>
            <p className="text-sm text-gray-500">{card.insight}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Performance Trends */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-8 bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Performance Trends</h2>
              <p className="text-gray-500">User engagement metrics over time</p>
            </div>
            <select className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#818CF8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34D399" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
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
                  dataKey="users"
                  stroke="#818CF8"
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#34D399"
                  fillOpacity={1}
                  fill="url(#colorEngagement)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-4 bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Geographic Distribution</h2>
          <div className="space-y-4">
            {geographicData.map((item) => (
              <div key={item.region} className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{item.region}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-2xl font-bold text-gray-900">{item.users.toLocaleString()}</span>
                    <span className="ml-2 text-sm text-green-600">{item.growth}</span>
                  </div>
                </div>
                <div className="w-24 h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData.slice(0, 4)}>
                      <Line 
                        type="monotone" 
                        dataKey="users" 
                        stroke="#818CF8" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Behavior Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-12 bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">User Behavior Analysis</h2>
              <p className="text-gray-500">Understanding user patterns and interactions</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
              Download Report
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add user behavior metrics here */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}