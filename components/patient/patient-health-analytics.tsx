'use client';

import { Card } from '@/components/ui/card';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function PatientHealthAnalytics() {
  const bloodPressureData = [
    { date: 'Jan 1', systolic: 125, diastolic: 82 },
    { date: 'Jan 8', systolic: 122, diastolic: 80 },
    { date: 'Jan 15', systolic: 120, diastolic: 79 },
    { date: 'Jan 22', systolic: 119, diastolic: 78 },
    { date: 'Jan 29', systolic: 120, diastolic: 80 },
  ];

  const weightData = [
    { week: 'Week 1', weight: 185, target: 180 },
    { week: 'Week 2', weight: 184, target: 180 },
    { week: 'Week 3', weight: 183, target: 180 },
    { week: 'Week 4', weight: 182, target: 180 },
  ];

  const activityData = [
    { day: 'Mon', steps: 8500, target: 10000 },
    { day: 'Tue', steps: 9200, target: 10000 },
    { day: 'Wed', steps: 10500, target: 10000 },
    { day: 'Thu', steps: 7800, target: 10000 },
    { day: 'Fri', steps: 11200, target: 10000 },
    { day: 'Sat', steps: 12500, target: 10000 },
    { day: 'Sun', steps: 6500, target: 10000 },
  ];

  const sleepData = [
    { day: 'Mon', hours: 6.5 },
    { day: 'Tue', hours: 7.2 },
    { day: 'Wed', hours: 7.8 },
    { day: 'Thu', hours: 6.9 },
    { day: 'Fri', hours: 7.1 },
    { day: 'Sat', hours: 8.2 },
    { day: 'Sun', hours: 7.9 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground">Health Analytics</h2>

      {/* Health Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Current Weight</p>
          <p className="text-3xl font-bold text-foreground">182 lbs</p>
          <p className="text-xs text-green-600 mt-2">-3 lbs from goal</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Blood Pressure</p>
          <p className="text-3xl font-bold text-primary">120/80</p>
          <p className="text-xs text-green-600 mt-2">Normal range</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">This Week Steps</p>
          <p className="text-3xl font-bold text-accent">66.2K</p>
          <p className="text-xs text-green-600 mt-2">Above goal by 6%</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-2">Avg Sleep</p>
          <p className="text-3xl font-bold text-primary">7.5 hrs</p>
          <p className="text-xs text-green-600 mt-2">Healthy schedule</p>
        </Card>
      </div>

      {/* Blood Pressure Trend */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Blood Pressure Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={bloodPressureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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
              dataKey="systolic"
              stroke="oklch(0.52 0.1 204.5)"
              strokeWidth={2}
              name="Systolic"
              dot={{ fill: 'oklch(0.52 0.1 204.5)' }}
            />
            <Line
              type="monotone"
              dataKey="diastolic"
              stroke="oklch(0.48 0.14 12.5)"
              strokeWidth={2}
              name="Diastolic"
              dot={{ fill: 'oklch(0.48 0.14 12.5)' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weight Progress */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Weight Progress</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={weightData}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.52 0.1 204.5)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="oklch(0.52 0.1 204.5)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" domain={[170, 190]} />
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
                dataKey="weight"
                stroke="oklch(0.52 0.1 204.5)"
                fillOpacity={1}
                fill="url(#colorWeight)"
                name="Current Weight"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="oklch(0.65 0.08 145)"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target Weight"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Daily Steps */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Daily Steps</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
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
              <Legend />
              <Bar dataKey="steps" fill="oklch(0.52 0.1 204.5)" name="Steps Taken" radius={8} />
              <Line type="monotone" dataKey="target" stroke="oklch(0.48 0.14 12.5)" strokeWidth={2} name="Daily Goal" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Sleep Pattern */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Weekly Sleep Pattern</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, 10]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="hours" fill="oklch(0.48 0.14 12.5)" name="Hours Slept" radius={8} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Health Recommendations */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-4">Health Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Continue your consistent exercise routine - you're exceeding your daily step goals!</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Blood pressure is well-controlled. Keep up with your current medication regimen.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">You're making great progress on your weight loss goal. Expect to reach target within 4-6 weeks at this pace.</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">Consider maintaining consistent sleep schedule. Aim for 7-8 hours every night.</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
