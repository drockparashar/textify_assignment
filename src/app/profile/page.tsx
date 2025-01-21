'use client'

import { motion } from 'framer-motion'
import { 
  CameraIcon, EnvelopeIcon, MapPinIcon, 
  BriefcaseIcon, LinkIcon, StarIcon,
  ChartBarIcon, UsersIcon, RocketLaunchIcon
} from '@heroicons/react/24/solid'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

const activityData = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 80 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 70 }
]

const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'UX Research', level: 88 },
  { name: 'Prototyping', level: 90 },
  { name: 'User Testing', level: 85 },
  { name: 'Design Systems', level: 92 }
]

const projects = [
  {
    name: 'E-Commerce Redesign',
    status: 'In Progress',
    completion: 75,
    color: 'blue',
    team: 5,
    daysLeft: 12
  },
  {
    name: 'Mobile Banking App',
    status: 'In Review',
    completion: 90,
    color: 'violet',
    team: 3,
    daysLeft: 5
  },
  {
    name: 'Design System',
    status: 'Active',
    completion: 60,
    color: 'emerald',
    team: 4,
    daysLeft: 20
  }
]

const achievements = [
  { icon: StarIcon, label: 'Top Designer 2023', color: 'amber' },
  { icon: ChartBarIcon, label: '100+ Projects', color: 'blue' },
  { icon: UsersIcon, label: 'Team Leader', color: 'emerald' },
  { icon: RocketLaunchIcon, label: 'Innovation Award', color: 'violet' }
]

export default function Profile() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E293B] to-[#0F172A] p-8 mb-6"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative group">
            <div className="h-32 w-32 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 p-1">
              <div className="h-full w-full rounded-2xl overflow-hidden">
                <img 
                  src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff&size=128" 
                  alt="John Doe"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <button className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <CameraIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-gray-400 mb-4">Senior Product Designer</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPinIcon className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <BriefcaseIcon className="h-4 w-4" />
                <span>Design Lead at TechCorp</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Activity & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Activity Chart */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Activity Overview</h2>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#8B5CF6"
                      fill="url(#colorActivity)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.label}
                    className={`p-4 rounded-xl bg-${achievement.color}-50 border border-${achievement.color}-100`}
                  >
                    <achievement.icon className={`h-6 w-6 text-${achievement.color}-500 mb-2`} />
                    <p className="text-sm font-medium text-gray-900">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-6">Current Projects</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-gray-900 font-medium">{project.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className={`text-sm text-${project.color}-600`}>{project.status}</span>
                        <span className="text-sm text-gray-500">{project.daysLeft} days left</span>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      {[...Array(project.team)].map((_, i) => (
                        <div 
                          key={i}
                          className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                        >
                          T{i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${project.color}-500 transition-all duration-500`}
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-violet-500 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">john.doe@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LinkIcon className="h-5 w-5 text-gray-400" />
                <a href="#" className="text-blue-600 hover:underline">portfolio.design</a>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}