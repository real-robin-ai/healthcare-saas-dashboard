'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, Pill, TrendingDown } from 'lucide-react';

export default function PatientMedicalRecords() {
  const documents = [
    {
      id: 1,
      name: 'Lab Results - Blood Work',
      date: '2024-01-25',
      provider: 'Dr. Sarah Johnson',
      type: 'Lab Results',
      fileSize: '2.4 MB',
    },
    {
      id: 2,
      name: 'Chest X-Ray Report',
      date: '2024-01-15',
      provider: 'Dr. Robert Taylor',
      type: 'Imaging',
      fileSize: '1.8 MB',
    },
    {
      id: 3,
      name: 'Diabetes Management Plan',
      date: '2024-01-10',
      provider: 'Dr. Michael Chen',
      type: 'Care Plan',
      fileSize: '0.5 MB',
    },
    {
      id: 4,
      name: 'Cardiology Consultation Notes',
      date: '2023-12-28',
      provider: 'Dr. Sarah Johnson',
      type: 'Consultation',
      fileSize: '0.8 MB',
    },
  ];

  const medications = [
    {
      id: 1,
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2023-06-15',
      status: 'Active',
      reason: 'Hypertension',
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: '2023-08-20',
      status: 'Active',
      reason: 'Diabetes Management',
    },
    {
      id: 3,
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      startDate: '2023-10-01',
      status: 'Active',
      reason: 'Cholesterol Management',
    },
  ];

  const allergies = [
    { name: 'Penicillin', severity: 'Severe', reaction: 'Anaphylaxis' },
    { name: 'Shellfish', severity: 'Moderate', reaction: 'Rash' },
  ];

  return (
    <div className="space-y-8">
      {/* Medical Documents */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Medical Records</h2>
        
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Document</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Provider</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">{doc.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{doc.type}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{doc.date}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{doc.provider}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{doc.fileSize}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Eye className="w-4 h-4" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Medications */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">Current Medications</h3>
          <div className="space-y-4">
            {medications.map((med) => (
              <Card key={med.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{med.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{med.dosage} • {med.frequency}</p>
                    <p className="text-xs text-muted-foreground mt-2">Reason: {med.reason}</p>
                    <p className="text-xs text-muted-foreground">Started: {med.startDate}</p>
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 mt-2">
                      {med.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">Allergies & Alerts</h3>
          <div className="space-y-4">
            {allergies.map((allergy, index) => (
              <Card key={index} className={`p-4 border-l-4 ${
                allergy.severity === 'Severe'
                  ? 'border-l-red-500 bg-red-50 dark:bg-red-950'
                  : 'border-l-orange-500 bg-orange-50 dark:bg-orange-950'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{allergy.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">Reaction: {allergy.reaction}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    allergy.severity === 'Severe'
                      ? 'bg-red-200 text-red-800'
                      : 'bg-orange-200 text-orange-800'
                  }`}>
                    {allergy.severity}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Health Summary */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <TrendingDown className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-2">Health Summary</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Your latest tests show stable health metrics. Continue current medications and lifestyle. Next check-up scheduled for February 10, 2024.
            </p>
            <Button variant="outline" size="sm">
              Request Medical Summary PDF
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
