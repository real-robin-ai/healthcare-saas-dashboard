'use client';

import { Card } from '@/components/ui/card';
import { Users, Calendar, AlertCircle, TrendingUp } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    {
      label: 'Total Patients',
      value: '1,247',
      icon: Users,
      color: 'bg-primary/10 text-primary',
      change: '+12%',
    },
    {
      label: 'Appointments Today',
      value: '34',
      icon: Calendar,
      color: 'bg-accent/10 text-accent',
      change: '+5%',
    },
    {
      label: 'Staff Members',
      value: '18',
      icon: Users,
      color: 'bg-blue-500/10 text-blue-600',
      change: '0',
    },
    {
      label: 'Clinic Efficiency',
      value: '94%',
      icon: TrendingUp,
      color: 'bg-green-500/10 text-green-600',
      change: '+3%',
    },
  ];

  const pendingTasks = [
    { id: 1, task: 'Review patient discharge papers', priority: 'high', dueDate: 'Today' },
    { id: 2, task: 'Update staff schedule for next week', priority: 'medium', dueDate: 'Tomorrow' },
    { id: 3, task: 'Process insurance claims batch', priority: 'medium', dueDate: 'Jan 30' },
    { id: 4, task: 'Update clinic equipment inventory', priority: 'low', dueDate: 'Feb 5' },
  ];

  const topProviders = [
    { name: 'Dr. Sarah Johnson', patients: 156, satisfaction: '4.9/5' },
    { name: 'Dr. Michael Chen', patients: 142, satisfaction: '4.8/5' },
    { name: 'Dr. Emily Davis', patients: 128, satisfaction: '4.7/5' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Tasks */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Pending Tasks</h2>
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{task.task}</p>
                  <p className="text-sm text-muted-foreground">Due: {task.dueDate}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-700'
                      : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Providers */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Top Performing Providers</h2>
          <div className="space-y-4">
            {topProviders.map((provider, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">{provider.name}</p>
                  <p className="text-sm text-muted-foreground">{provider.patients} active patients</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{provider.satisfaction}</p>
                  <p className="text-xs text-muted-foreground">satisfaction</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="p-6 border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950">
        <div className="flex gap-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">System Alerts</h3>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Reminder: Backup scheduled for tonight at 11 PM. System will be briefly unavailable.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
