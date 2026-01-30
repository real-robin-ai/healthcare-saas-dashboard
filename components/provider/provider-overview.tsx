'use client';

import { Card } from '@/components/ui/card';
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';

export default function ProviderOverview() {
  const stats = [
    {
      label: 'Active Patients',
      value: '24',
      icon: Users,
      color: 'bg-primary/10 text-primary',
    },
    {
      label: 'Today\'s Appointments',
      value: '8',
      icon: Calendar,
      color: 'bg-accent/10 text-accent',
    },
    {
      label: 'Avg Wait Time',
      value: '12 min',
      icon: Clock,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      label: 'Patient Satisfaction',
      value: '4.8/5',
      icon: TrendingUp,
      color: 'bg-green-500/10 text-green-600',
    },
  ];

  const upcomingAppointments = [
    { id: 1, patient: 'John Doe', time: '9:00 AM', type: 'Check-up' },
    { id: 2, patient: 'Jane Smith', time: '10:30 AM', type: 'Follow-up' },
    { id: 3, patient: 'Robert Johnson', time: '2:00 PM', type: 'Consultation' },
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
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Upcoming Appointments */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Today's Appointments</h2>
        <div className="space-y-4">
          {upcomingAppointments.map((apt) => (
            <div key={apt.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
              <div>
                <p className="font-semibold text-foreground">{apt.patient}</p>
                <p className="text-sm text-muted-foreground">{apt.type}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">{apt.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Recent Patient Notes</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <p className="font-semibold text-foreground mb-2">Sarah Wilson</p>
            <p className="text-sm text-muted-foreground">Blood pressure normal. Continue current medication. Follow-up in 2 weeks.</p>
            <p className="text-xs text-muted-foreground mt-2">Updated 2 hours ago</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="font-semibold text-foreground mb-2">Michael Chen</p>
            <p className="text-sm text-muted-foreground">Reviewed lab results. All values within normal range. No changes needed.</p>
            <p className="text-xs text-muted-foreground mt-2">Updated 4 hours ago</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
