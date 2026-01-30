'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard-header';
import DashboardNav from '@/components/dashboard-nav';
import PatientOverview from '@/components/patient/patient-overview';
import PatientAppointments from '@/components/patient/patient-appointments';
import PatientMedicalRecords from '@/components/patient/patient-medical-records';
import PatientHealthAnalytics from '@/components/patient/patient-health-analytics';

interface PatientDashboardProps {
  onLogout: () => void;
}

export default function PatientDashboard({ onLogout }: PatientDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'records' | 'health'>('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'appointments', label: 'Appointments', icon: 'calendar' },
    { id: 'records', label: 'Medical Records', icon: 'file' },
    { id: 'health', label: 'Health Analytics', icon: 'home' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Patient Portal" onLogout={onLogout} userRole="Patient" />
      <div className="flex">
        <DashboardNav items={navItems} activeTab={activeTab} onTabChange={setActiveTab as any} />
        <main className="flex-1">
          <div className="p-8">
            {activeTab === 'overview' && <PatientOverview />}
            {activeTab === 'appointments' && <PatientAppointments />}
            {activeTab === 'records' && <PatientMedicalRecords />}
            {activeTab === 'health' && <PatientHealthAnalytics />}
          </div>
        </main>
      </div>
    </div>
  );
}
