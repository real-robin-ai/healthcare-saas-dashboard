'use client';

import { Card } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function ProviderAnalytics() {
  const appointmentData = [
    { month: 'Jan', total: 45, completed: 42, cancelled: 3 },
    { month: 'Feb', total: 52, completed: 50, cancelled: 2 },
    { month: 'Mar', total: 48, completed: 46, cancelled: 2 },
    { month: 'Apr', total: 61, completed: 58, cancelled: 3 },
    { month: 'May', total: 55, completed: 54, cancelled: 1 },
    { month: 'Jun', total: 67, completed: 65, cancelled: 2 },
  ];

  const patientSatisfactionData = [
    { rating: '5 Stars', value: 156 },
    { rating: '4 Stars', value: 98 },
    { rating: '3 Stars', value: 24 },
    { rating: '2 Stars', value: 8 },
    { rating: '1 Star', value: 4 },
  ];

  const visitTypeData = [
    { name: 'Check-up', value: 240, fill: 'oklch(0.52 0.1 204.5)' },
    { name: 'Follow-up', value: 180, fill: 'oklch(0.48 0.14 12.5)' },
    { name: 'Consultation', value: 140, fill: 'oklch(0.65 0.08 145)' },
    { name: 'Procedure', value: 95, fill: 'oklch(0.7 0.1 45)' },
  ];

  const avgResponseTimeData = [
    { day: 'Mon', time: 8.2 },
    { day: 'Tue', time: 7.5 },
    { day: 'Wed', time: 8.8 },
    { day: 'Thu', time: 7.2 },
    { day: 'Fri', time: 8.5 },
    { day: 'Sat', time: 6.8 },
    { day: 'Sun', time: 7.0 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Analytics & Performance Metrics</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Avg Satisfaction</p>
          <p className="text-3xl font-bold text-primary">4.8/5</p>
          <p className="text-xs text-green-600 mt-2">+0.2 from last month</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Total Patients</p>
          <p className="text-3xl font-bold text-primary">290</p>
          <p className="text-xs text-green-600 mt-2">+8 new this month</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Completion Rate</p>
          <p className="text-3xl font-bold text-accent">97.2%</p>
          <p className="text-xs text-green-600 mt-2">High performance</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Avg Response Time</p>
          <p className="text-3xl font-bold text-primary">7.6 hrs</p>
          <p className="text-xs text-green-600 mt-2">-0.4 hrs improvement</p>
        </Card>
      </div>

      {/* Appointment Trends */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Appointment Trends (6 Months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={appointmentData}>
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
            <Line
              type="monotone"
              dataKey="total"
              stroke="oklch(0.52 0.1 204.5)"
              strokeWidth={2}
              name="Total Appointments"
              dot={{ fill: 'oklch(0.52 0.1 204.5)' }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="oklch(0.65 0.08 145)"
              strokeWidth={2}
              name="Completed"
              dot={{ fill: 'oklch(0.65 0.08 145)' }}
            />
            <Line
              type="monotone"
              dataKey="cancelled"
              stroke="oklch(0.48 0.14 12.5)"
              strokeWidth={2}
              name="Cancelled"
              dot={{ fill: 'oklch(0.48 0.14 12.5)' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Patient Satisfaction Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Satisfaction Ratings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={patientSatisfactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="rating" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" fill="oklch(0.52 0.1 204.5)" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Visit Types Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Visit Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={visitTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {visitTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Average Response Time */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Avg Response Time (Hours)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={avgResponseTimeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="time" fill="oklch(0.48 0.14 12.5)" radius={8} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
