'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function PatientsList() {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  const patients = [
    {
      id: 1,
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      lastVisit: '2024-01-25',
      status: 'Active',
      condition: 'Hypertension',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 38,
      gender: 'Female',
      lastVisit: '2024-01-28',
      status: 'Active',
      condition: 'Diabetes Management',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      age: 62,
      gender: 'Male',
      lastVisit: '2024-01-22',
      status: 'Active',
      condition: 'Heart Disease',
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 29,
      gender: 'Female',
      lastVisit: '2024-01-27',
      status: 'Active',
      condition: 'Regular Check-up',
    },
    {
      id: 5,
      name: 'Michael Wilson',
      age: 55,
      gender: 'Male',
      lastVisit: '2024-01-20',
      status: 'Inactive',
      condition: 'Arthritis',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">My Patients</h2>
        <Button className="bg-primary hover:bg-primary/90">Add New Patient</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Age</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Gender</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Last Visit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Condition</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{patient.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.age}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.gender}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.lastVisit}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.condition}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
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
