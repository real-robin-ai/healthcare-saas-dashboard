'use client';

import { Button } from '@/components/ui/button';
import { LogOut, Activity } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  onLogout: () => void;
  userRole: string;
}

export default function DashboardHeader({ title, onLogout, userRole }: DashboardHeaderProps) {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{userRole}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onLogout} className="gap-2 bg-transparent">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </header>
  );
}
