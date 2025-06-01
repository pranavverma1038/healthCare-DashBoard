import HealthRecords from './HealthRecords';
import AccessManager from './AccessManager';
import ConsentHistory from './ConsentHistory';
import UploadDocument from './UploadDocument';
import { motion } from 'framer-motion';

export default function PatientDashboard() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold">Patient Dashboard</h2>
      <HealthRecords />
      <AccessManager />
      <ConsentHistory />
      <UploadDocument />
    </motion.div>
  );
} 