'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Trash2, Edit2 } from 'lucide-react';

export default function PatientAppointments() {
  const upcomingAppointments = [
    {
      id: 1,
      provider: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-02-10',
      time: '2:00 PM',
      location: 'Room 301, Building A',
      status: 'Confirmed',
      type: 'Follow-up',
    },
    {
      id: 2,
      provider: 'Dr. Michael Chen',
      specialty: 'Internal Medicine',
      date: '2024-02-15',
      time: '9:30 AM',
      location: 'Lab, Ground Floor',
      status: 'Pending',
      type: 'Lab Test',
    },
    {
      id: 3,
      provider: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      date: '2024-02-20',
      time: '3:30 PM',
      location: 'Room 105, Building B',
      status: 'Confirmed',
      type: 'Check-up',
    },
  ];

  const pastAppointments = [
    {
      id: 4,
      provider: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      date: '2024-01-25',
      time: '10:00 AM',
      notes: 'Check-up completed successfully',
    },
    {
      id: 5,
      provider: 'Dr. Robert Taylor',
      specialty: 'Radiology',
      date: '2024-01-15',
      time: '2:00 PM',
      notes: 'X-ray performed. Results normal.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Book New Appointment */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Your Appointments</h2>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Calendar className="w-4 h-4" />
          Book New Appointment
        </Button>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Upcoming Appointments</h3>
        {upcomingAppointments.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No upcoming appointments scheduled</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {upcomingAppointments.map((apt) => (
              <Card key={apt.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">{apt.provider}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        apt.status === 'Confirmed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{apt.specialty} • {apt.type}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-t border-border">
                      <div className="flex gap-2 items-start">
                        <Calendar className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Date</p>
                          <p className="font-semibold text-foreground">{apt.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <Clock className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Time</p>
                          <p className="font-semibold text-foreground">{apt.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <MapPin className="w-4 h-4 text-primary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="font-semibold text-foreground">{apt.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Past Appointments */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Past Appointments</h3>
        {pastAppointments.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No past appointments</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {pastAppointments.map((apt) => (
              <Card key={apt.id} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-muted rounded-lg mt-1">
                    <User className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{apt.provider}</h3>
                    <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span className="text-muted-foreground">{apt.date}</span>
                      <span className="text-muted-foreground">{apt.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{apt.notes}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
