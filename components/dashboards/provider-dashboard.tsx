'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard-header';
import DashboardNav from '@/components/dashboard-nav';
import ProviderOverview from '@/components/provider/provider-overview';
import PatientsList from '@/components/provider/patients-list';
import ScheduleView from '@/components/provider/schedule-view';
import ProviderAnalytics from '@/components/provider/provider-analytics';

interface ProviderDashboardProps {
  onLogout: () => void;
}

export default function ProviderDashboard({ onLogout }: ProviderDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'patients' | 'schedule' | 'analytics'>('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'patients', label: 'My Patients', icon: 'users' },
    { id: 'schedule', label: 'Schedule', icon: 'calendar' },
    { id: 'analytics', label: 'Analytics', icon: 'home' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Provider Dashboard" onLogout={onLogout} userRole="Healthcare Provider" />
      <div className="flex">
        <DashboardNav items={navItems} activeTab={activeTab} onTabChange={setActiveTab as any} />
        <main className="flex-1">
          <div className="p-8">
            {activeTab === 'overview' && <ProviderOverview />}
            {activeTab === 'patients' && <PatientsList />}
            {activeTab === 'schedule' && <ScheduleView />}
            {activeTab === 'analytics' && <ProviderAnalytics />}
          </div>
        </main>
      </div>
    </div>
  );
}
