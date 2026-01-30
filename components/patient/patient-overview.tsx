'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Activity, Pill, AlertCircle } from 'lucide-react';

export default function PatientOverview() {
  const patientInfo = {
    name: 'John Smith',
    dateOfBirth: '1978-05-15',
    age: 45,
    gender: 'Male',
    bloodType: 'O+',
    primaryProvider: 'Dr. Sarah Johnson',
  };

  const healthMetrics = [
    {
      label: 'Blood Pressure',
      value: '120/80',
      status: 'Normal',
      icon: Heart,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      label: 'Heart Rate',
      value: '72 bpm',
      status: 'Healthy',
      icon: Activity,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      label: 'Current Medications',
      value: '3',
      status: 'Active',
      icon: Pill,
      color: 'bg-primary/10 text-primary',
    },
    {
      label: 'Last Visit',
      value: '15 days ago',
      status: 'Check-up',
      icon: AlertCircle,
      color: 'bg-accent/10 text-accent',
    },
  ];

  const appointments = [
    {
      id: 1,
      provider: 'Dr. Sarah Johnson',
      type: 'Follow-up',
      date: '2024-02-10',
      time: '2:00 PM',
      status: 'Confirmed',
    },
    {
      id: 2,
      provider: 'Dr. Michael Chen',
      type: 'Lab Test',
      date: '2024-02-15',
      time: '9:30 AM',
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Patient Info Card */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">{patientInfo.name}</h2>
            <p className="text-muted-foreground mb-4">Patient ID: PT-2024-001</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Age</p>
                <p className="font-semibold text-foreground">{patientInfo.age} years</p>
              </div>
              <div>
                <p className="text-muted-foreground">Blood Type</p>
                <p className="font-semibold text-foreground">{patientInfo.bloodType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gender</p>
                <p className="font-semibold text-foreground">{patientInfo.gender}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-2">Primary Provider</p>
            <p className="text-lg font-semibold text-primary">{patientInfo.primaryProvider}</p>
          </div>
        </div>
      </Card>

      {/* Health Metrics */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Health Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${metric.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{metric.status}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Upcoming Appointments */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Upcoming Appointments</h3>
          <Button className="bg-primary hover:bg-primary/90">Book Appointment</Button>
        </div>
        {appointments.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No upcoming appointments</p>
        ) : (
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{apt.provider}</p>
                  <p className="text-sm text-muted-foreground">{apt.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{apt.date}</p>
                  <p className="text-sm text-muted-foreground">{apt.time}</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${
                    apt.status === 'Confirmed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-12 bg-transparent">
            Message Provider
          </Button>
          <Button variant="outline" className="h-12 bg-transparent">
            Request Prescription
          </Button>
          <Button variant="outline" className="h-12 bg-transparent">
            View Test Results
          </Button>
          <Button variant="outline" className="h-12 bg-transparent">
            Schedule Appointment
          </Button>
        </div>
      </Card>
    </div>
  );
}
