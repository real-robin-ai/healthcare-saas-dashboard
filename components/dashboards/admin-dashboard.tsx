'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import DashboardHeader from '@/components/dashboard-header';
import DashboardNav from '@/components/dashboard-nav';
import AdminOverview from '@/components/admin/admin-overview';
import ClinicSchedule from '@/components/admin/clinic-schedule';
import StaffManagement from '@/components/admin/staff-management';
import AdminAnalytics from '@/components/admin/admin-analytics';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'staff' | 'analytics'>('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: 'home' },
    { id: 'schedule', label: 'Clinic Schedule', icon: 'calendar' },
    { id: 'staff', label: 'Staff Management', icon: 'users' },
    { id: 'analytics', label: 'Analytics', icon: 'home' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader title="Administrator Dashboard" onLogout={onLogout} userRole="Clinic Administrator" />
      <div className="flex">
        <DashboardNav items={navItems} activeTab={activeTab} onTabChange={setActiveTab as any} />
        <main className="flex-1">
          <div className="p-8">
            {activeTab === 'overview' && <AdminOverview />}
            {activeTab === 'schedule' && <ClinicSchedule />}
            {activeTab === 'staff' && <StaffManagement />}
            {activeTab === 'analytics' && <AdminAnalytics />}
          </div>
        </main>
      </div>
    </div>
  );
}
