'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';

export default function StaffManagement() {
  const staff = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      department: 'Cardiology',
      status: 'Active',
      startDate: '2022-01-15',
      patients: 156,
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Internal Medicine',
      department: 'General Medicine',
      status: 'Active',
      startDate: '2021-06-20',
      patients: 142,
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      role: 'Pediatrician',
      department: 'Pediatrics',
      status: 'Active',
      startDate: '2023-03-10',
      patients: 128,
    },
    {
      id: 4,
      name: 'Nurse Patricia Wilson',
      role: 'RN - Registered Nurse',
      department: 'Nursing',
      status: 'Active',
      startDate: '2020-09-05',
      patients: 0,
    },
    {
      id: 5,
      name: 'Dr. Robert Taylor',
      role: 'Radiologist',
      department: 'Radiology',
      status: 'On Leave',
      startDate: '2019-02-18',
      patients: 0,
    },
  ];

  const departments = [
    { name: 'Cardiology', staff: 4, status: 'Fully Staffed' },
    { name: 'General Medicine', staff: 6, status: 'Fully Staffed' },
    { name: 'Pediatrics', staff: 3, status: 'Needs Staff' },
    { name: 'Nursing', staff: 8, status: 'Fully Staffed' },
    { name: 'Radiology', staff: 2, status: 'Needs Staff' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Staff Management</h2>
        <Button className="bg-primary hover:bg-primary/90">Add Staff Member</Button>
      </div>

      {/* Staff List */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Start Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Patients</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member) => (
                <tr key={member.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{member.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.role}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.department}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.startDate}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{member.patients || '-'}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        member.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Department Overview */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">Department Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {departments.map((dept, index) => (
            <div key={index} className="p-4 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">{dept.name}</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Staff</p>
                  <p className="text-2xl font-bold text-primary">{dept.staff}</p>
                </div>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    dept.status === 'Fully Staffed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {dept.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
