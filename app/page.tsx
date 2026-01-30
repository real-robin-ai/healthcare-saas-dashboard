'use client';

import { useState } from 'react';
import ProviderDashboard from '@/components/dashboards/provider-dashboard';
import AdminDashboard from '@/components/dashboards/admin-dashboard';
import PatientDashboard from '@/components/dashboards/patient-dashboard';
import RoleSelector from '@/components/role-selector';

type UserRole = 'provider' | 'admin' | 'patient' | null;

export default function Home() {
  const [role, setRole] = useState<UserRole>(null);

  if (!role) {
    return <RoleSelector onSelectRole={setRole} />;
  }

  return (
    <div>
      {role === 'provider' && <ProviderDashboard onLogout={() => setRole(null)} />}
      {role === 'admin' && <AdminDashboard onLogout={() => setRole(null)} />}
      {role === 'patient' && <PatientDashboard onLogout={() => setRole(null)} />}
    </div>
  );
}
