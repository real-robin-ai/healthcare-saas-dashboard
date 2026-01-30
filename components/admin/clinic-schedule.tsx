'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ClinicSchedule() {
  const [view, setView] = useState<'week' | 'room'>('week');

  const weekSchedule = [
    {
      day: 'Monday',
      status: 'Full',
      appointments: 28,
      providers: 6,
    },
    {
      day: 'Tuesday',
      status: 'Full',
      appointments: 26,
      providers: 5,
    },
    {
      day: 'Wednesday',
      status: 'Available',
      appointments: 18,
      providers: 6,
    },
    {
      day: 'Thursday',
      status: 'Available',
      appointments: 20,
      providers: 5,
    },
    {
      day: 'Friday',
      status: 'Available',
      appointments: 15,
      providers: 4,
    },
  ];

  const rooms = [
    {
      name: 'Examination Room A',
      status: 'In Use',
      provider: 'Dr. Sarah Johnson',
      endTime: '10:45 AM',
    },
    {
      name: 'Examination Room B',
      status: 'In Use',
      provider: 'Dr. Michael Chen',
      endTime: '11:00 AM',
    },
    {
      name: 'Consultation Room 1',
      status: 'Available',
      provider: '-',
      endTime: '-',
    },
    {
      name: 'Consultation Room 2',
      status: 'In Use',
      provider: 'Dr. Emily Davis',
      endTime: '10:30 AM',
    },
    {
      name: 'Lab',
      status: 'Available',
      provider: '-',
      endTime: '-',
    },
    {
      name: 'Imaging',
      status: 'In Use',
      provider: 'Dr. Robert Taylor',
      endTime: '3:00 PM',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Clinic Schedule</h2>
        <div className="flex gap-2">
          <Button
            variant={view === 'week' ? 'default' : 'outline'}
            onClick={() => setView('week')}
            className={view === 'week' ? 'bg-primary hover:bg-primary/90' : ''}
          >
            Week View
          </Button>
          <Button
            variant={view === 'room' ? 'default' : 'outline'}
            onClick={() => setView('room')}
            className={view === 'room' ? 'bg-primary hover:bg-primary/90' : ''}
          >
            Room Status
          </Button>
        </div>
      </div>

      {view === 'week' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {weekSchedule.map((day, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-foreground mb-4">{day.day}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p
                    className={`text-lg font-bold ${
                      day.status === 'Full'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {day.status}
                  </p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground">Appointments</p>
                  <p className="text-2xl font-bold text-primary">{day.appointments}</p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm text-muted-foreground">Providers</p>
                  <p className="text-lg font-semibold text-foreground">{day.providers}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {view === 'room' && (
        <div className="space-y-4">
          {rooms.map((room, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{room.name}</h3>
                  {room.status === 'In Use' ? (
                    <>
                      <p className="text-sm text-muted-foreground">Provider: {room.provider}</p>
                      <p className="text-sm text-muted-foreground">Available at: {room.endTime}</p>
                    </>
                  ) : (
                    <p className="text-sm text-green-600 font-medium">Ready for use</p>
                  )}
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                      room.status === 'In Use'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {room.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
