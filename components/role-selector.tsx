'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Stethoscope, Users, User } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'provider' | 'admin' | 'patient') => void;
}

export default function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Healthcare Platform</h1>
          <p className="text-lg text-muted-foreground">Select your role to access the dashboard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Provider Role */}
          <Card className="flex flex-col items-center p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelectRole('provider')}>
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <Stethoscope className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Healthcare Provider</h2>
            <p className="text-muted-foreground text-center mb-8">Doctors and medical professionals managing patient care</p>
            <Button onClick={() => onSelectRole('provider')} className="mt-auto w-full bg-primary hover:bg-primary/90">
              Access Provider Dashboard
            </Button>
          </Card>

          {/* Admin Role */}
          <Card className="flex flex-col items-center p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelectRole('admin')}>
            <div className="bg-accent/10 p-4 rounded-lg mb-6">
              <Users className="w-12 h-12 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Administrator</h2>
            <p className="text-muted-foreground text-center mb-8">Clinic staff managing operations and schedules</p>
            <Button onClick={() => onSelectRole('admin')} className="mt-auto w-full bg-accent hover:bg-accent/90">
              Access Admin Dashboard
            </Button>
          </Card>

          {/* Patient Role */}
          <Card className="flex flex-col items-center p-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onSelectRole('patient')}>
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Patient</h2>
            <p className="text-muted-foreground text-center mb-8">Access your health information and appointments</p>
            <Button onClick={() => onSelectRole('patient')} className="mt-auto w-full bg-primary hover:bg-primary/90">
              Access Patient Portal
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
