'use client';

import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function AdminAnalytics() {
  const clinicPerformanceData = [
    { week: 'Week 1', scheduled: 120, completed: 115, noShow: 5 },
    { week: 'Week 2', scheduled: 135, completed: 130, noShow: 5 },
    { week: 'Week 3', scheduled: 142, completed: 138, noShow: 4 },
    { week: 'Week 4', scheduled: 155, completed: 151, noShow: 4 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Feb', revenue: 52000, target: 50000 },
    { month: 'Mar', revenue: 48000, target: 50000 },
    { month: 'Apr', revenue: 61000, target: 50000 },
    { month: 'May', revenue: 55000, target: 50000 },
    { month: 'Jun', revenue: 67000, target: 50000 },
  ];

  const departmentPerformanceData = [
    { department: 'Cardiology', patients: 156, satisfaction: 4.9 },
    { department: 'Internal Med', patients: 142, satisfaction: 4.8 },
    { department: 'Pediatrics', patients: 128, satisfaction: 4.7 },
    { department: 'Radiology', patients: 95, satisfaction: 4.6 },
    { department: 'Nursing', patients: 234, satisfaction: 4.8 },
  ];

  const appointmentNoShowData = [
    { month: 'Jan', rate: 3.2 },
    { month: 'Feb', rate: 3.0 },
    { month: 'Mar', rate: 2.8 },
    { month: 'Apr', rate: 2.5 },
    { month: 'May', rate: 2.3 },
    { month: 'Jun', rate: 2.1 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Clinic Analytics & Reports</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Monthly Revenue</p>
          <p className="text-3xl font-bold text-primary">$67K</p>
          <p className="text-xs text-green-600 mt-2">+21.8% vs target</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Clinic Occupancy</p>
          <p className="text-3xl font-bold text-accent">94%</p>
          <p className="text-xs text-green-600 mt-2">Excellent utilization</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">No-Show Rate</p>
          <p className="text-3xl font-bold text-primary">2.1%</p>
          <p className="text-xs text-green-600 mt-2">-1.1% improvement</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Total Patients</p>
          <p className="text-3xl font-bold text-primary">1,247</p>
          <p className="text-xs text-green-600 mt-2">+47 this month</p>
        </Card>
      </div>

      {/* Clinic Performance */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Weekly Clinic Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={clinicPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="scheduled" fill="oklch(0.52 0.1 204.5)" name="Scheduled" radius={[8, 8, 0, 0]} />
            <Bar dataKey="completed" fill="oklch(0.65 0.08 145)" name="Completed" radius={[8, 8, 0, 0]} />
            <Bar dataKey="noShow" fill="oklch(0.48 0.14 12.5)" name="No-Show" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trend */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.52 0.1 204.5)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="oklch(0.52 0.1 204.5)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="oklch(0.52 0.1 204.5)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Actual Revenue"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="oklch(0.48 0.14 12.5)"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* No-Show Rate Trend */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">No-Show Rate Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appointmentNoShowData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="oklch(0.48 0.14 12.5)"
                strokeWidth={3}
                name="No-Show Rate (%)"
                dot={{ fill: 'oklch(0.48 0.14 12.5)' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Department Performance */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Department Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Active Patients</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Satisfaction</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Performance</th>
              </tr>
            </thead>
            <tbody>
              {departmentPerformanceData.map((dept, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/50">
                  <td className="px-6 py-4 font-medium text-foreground">{dept.department}</td>
                  <td className="px-6 py-4 text-muted-foreground">{dept.patients}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      {dept.satisfaction}/5
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32 bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(dept.satisfaction / 5) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
