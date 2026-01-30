'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function ScheduleView() {
  const [currentDay, setCurrentDay] = useState(0);

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
  ];

  const appointments = {
    0: [
      { time: '9:00 AM', patient: 'John Doe', duration: '30 min', type: 'Check-up' },
      { time: '10:30 AM', patient: 'Jane Smith', duration: '45 min', type: 'Follow-up' },
      { time: '2:00 PM', patient: 'Robert Johnson', duration: '30 min', type: 'Consultation' },
    ],
    1: [
      { time: '9:30 AM', patient: 'Emily Davis', duration: '30 min', type: 'Check-up' },
      { time: '3:00 PM', patient: 'Sarah Wilson', duration: '30 min', type: 'Follow-up' },
    ],
    2: [
      { time: '10:00 AM', patient: 'Michael Chen', duration: '45 min', type: 'Consultation' },
    ],
    3: [
      { time: '9:00 AM', patient: 'David Brown', duration: '30 min', type: 'Check-up' },
      { time: '11:00 AM', patient: 'Lisa Anderson', duration: '30 min', type: 'Follow-up' },
      { time: '2:30 PM', patient: 'James Taylor', duration: '45 min', type: 'Consultation' },
    ],
    4: [{ time: '10:00 AM', patient: 'Patricia Martinez', duration: '30 min', type: 'Check-up' }],
  };

  const dayAppointments = (appointments as any)[currentDay] || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Weekly Schedule</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDay(Math.max(0, currentDay - 1))}
            disabled={currentDay === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentDay(Math.min(4, currentDay + 1))}
            disabled={currentDay === 4}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {weekDays.map((day, index) => (
          <Card
            key={index}
            className={`p-4 cursor-pointer transition-all ${
              index === currentDay
                ? 'bg-primary text-primary-foreground border-primary'
                : 'hover:border-primary/50'
            }`}
            onClick={() => setCurrentDay(index)}
          >
            <p className="font-semibold text-center">{day}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">{weekDays[currentDay]}'s Appointments</h3>
        {dayAppointments.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No appointments scheduled for this day</p>
        ) : (
          <div className="space-y-3">
            {dayAppointments.map((apt: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div>
                  <p className="font-semibold text-foreground">{apt.patient}</p>
                  <p className="text-sm text-muted-foreground">{apt.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">{apt.time}</p>
                  <p className="text-sm text-muted-foreground">{apt.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">Available Slots</h3>
        <div className="grid grid-cols-5 gap-2">
          {timeSlots.map((slot, index) => {
            const isBooked = dayAppointments.some((apt: any) => apt.time === slot);
            return (
              <Button
                key={index}
                variant={isBooked ? 'secondary' : 'outline'}
                disabled={isBooked}
                className="h-10"
              >
                {slot}
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
