'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Plus, FileText } from 'lucide-react';
import { useState } from 'react';

interface MedicalRecordsViewerProps {
  patientName?: string;
  canEdit?: boolean;
}

export default function MedicalRecordsViewer({
  patientName = 'Current Patient',
  canEdit = false,
}: MedicalRecordsViewerProps) {
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);

  const records = [
    {
      id: 1,
      date: '2024-01-25',
      type: 'Lab Results',
      description: 'Complete Blood Count (CBC)',
      provider: 'Dr. Sarah Johnson',
      results: [
        { name: 'WBC', value: '7.2', unit: 'K/uL', normal: '4.5-11.0' },
        { name: 'RBC', value: '4.8', unit: 'M/uL', normal: '4.5-5.5' },
        { name: 'Hemoglobin', value: '14.2', unit: 'g/dL', normal: '13.5-17.5' },
        { name: 'Platelets', value: '245', unit: 'K/uL', normal: '150-400' },
      ],
    },
    {
      id: 2,
      date: '2024-01-15',
      type: 'Imaging',
      description: 'Chest X-Ray',
      provider: 'Dr. Robert Taylor',
      results: [{ name: 'Findings', value: 'No acute abnormalities detected', unit: '', normal: '' }],
    },
    {
      id: 3,
      date: '2024-01-10',
      type: 'Vital Signs',
      description: 'Clinical Assessment',
      provider: 'Dr. Michael Chen',
      results: [
        { name: 'Blood Pressure', value: '120/80', unit: 'mmHg', normal: '<130/80' },
        { name: 'Heart Rate', value: '72', unit: 'bpm', normal: '60-100' },
        { name: 'Temperature', value: '98.6', unit: '°F', normal: '98.6' },
        { name: 'BMI', value: '24.5', unit: 'kg/m²', normal: '18.5-24.9' },
      ],
    },
  ];

  const selectedData = records.find((r) => r.id === selectedRecord);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-foreground">Medical Records</h3>
        {canEdit && (
          <Button className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Add Record
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Records List */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <div className="space-y-2">
              {records.map((record) => (
                <div
                  key={record.id}
                  onClick={() => setSelectedRecord(record.id)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedRecord === record.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/70'
                  }`}
                >
                  <p className="font-semibold text-sm">{record.type}</p>
                  <p className={`text-xs ${selectedRecord === record.id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {record.description}
                  </p>
                  <p className={`text-xs mt-2 ${selectedRecord === record.id ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    {record.date}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Record Details */}
        <div className="lg:col-span-2">
          {selectedData ? (
            <Card className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{selectedData.description}</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedData.type} • {selectedData.date} • By {selectedData.provider}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary border-b border-border">
                    <tr>
                      <th className="text-left px-4 py-2 font-semibold text-foreground">Test/Measurement</th>
                      <th className="text-left px-4 py-2 font-semibold text-foreground">Value</th>
                      <th className="text-left px-4 py-2 font-semibold text-foreground">Unit</th>
                      <th className="text-left px-4 py-2 font-semibold text-foreground">Normal Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedData.results.map((result, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-secondary/50">
                        <td className="px-4 py-3 font-medium text-foreground">{result.name}</td>
                        <td className="px-4 py-3 text-foreground">{result.value}</td>
                        <td className="px-4 py-3 text-muted-foreground">{result.unit}</td>
                        <td className="px-4 py-3 text-muted-foreground">{result.normal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
            <Card className="p-12 flex flex-col items-center justify-center">
              <FileText className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Select a record to view details</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
