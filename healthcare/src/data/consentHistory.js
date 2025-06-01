export const consentHistory = [
  {
    id: 'c1',
    patientId: 'p1',
    doctorId: 'd1',
    recordId: 'r2',
    action: 'granted',
    timestamp: '2024-06-01T10:00:00Z',
    reason: 'Routine checkup',
  },
  {
    id: 'c2',
    patientId: 'p2',
    doctorId: 'd2',
    recordId: 'r3',
    action: 'accessed',
    timestamp: '2024-06-02T14:30:00Z',
    reason: 'Diagnosis',
  },
  {
    id: 'c3',
    patientId: 'p1',
    doctorId: 'd1',
    recordId: 'r1',
    action: 'revoked',
    timestamp: '2024-06-03T09:15:00Z',
    reason: 'Consent withdrawn',
  },
]; 